import * as cheerio from "cheerio";

// https://www.horsetelex.com/horses/pedigree/76291/test
// https://www.horsetelex.com/horses/pedigree/78427/drota
// https://www.horsetelex.com/horses/pedigree/145960/nastoria


interface Horse {
    name: string;
    href: string | null;
    sex: "stallion" | "mare"
}

type Pedigree = (Horse | null)[]

function validateUrl(url: string): string {
    let parsed: URL;

    try {
        parsed = new URL(url);
    } catch {
        throw new Error("Invalid URL");
    }

    if (parsed.protocol !== "https:") {
        throw new Error("Only https URLs are allowed");
    }

    if (parsed.hostname !== "www.horsetelex.com") {
        throw new Error("Only horsetelex.com URLs are allowed");
    }

    // optional: enforce correct path format
    if (!/^\/horses\/pedigree\/\d+\/[a-z0-9-]+$/i.test(parsed.pathname)) {
        throw new Error("URL path is not a valid pedigree path");
    }

    return parsed.toString();
}

async function getPedigree(url: string): Promise<Pedigree | null> {
    url = validateUrl(url)
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);

    const tds = $("app-pedigree-display-component td")
    const pedigree: Pedigree = new Array(tds.length);

    for (let i = 0; i < tds.length; i++) {
        const td = tds[i]
        const horseDiv = $(td).find("div > div > div")

        const a = horseDiv.find("a").first()
        if (!a.length) {
            if(i === 0) return null
            pedigree[i] = null
            continue
        }
        const name = a.text().trim()

        if (!name) {
            if(i === 0) return null
            pedigree[i] = null
            continue
        }

        const hrefPart = a.attr("href")
        const href = hrefPart ? "https://www.horsetelex.com" + hrefPart : null

        const classAttr = horseDiv.attr("class") || "";
        const sex: "stallion" | "mare" =
            classAttr.includes("stallion") ? "stallion" : "mare";
        pedigree[i] = { name, href, sex }
    }
    return pedigree
}

async function main() {
    const url = "https://www.horsetelex.com/horses/pedigree/145960/nastoria";
    const pedigree = await getPedigree(url);
    console.log(pedigree);
}

main().catch(console.error);