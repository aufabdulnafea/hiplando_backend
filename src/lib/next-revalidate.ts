import { env } from "../config";

export async function revalidateNextTag(tag: string) {
    const url = `${env.NEXTJS_PUBLIC_URL}/api/revalidate/tag`
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            tag: tag,
            secret: env.NEXTJS_REVALIDATE_SECRET,
        }),
    })
    return await res.json()
}

export async function revalidateNextPath(path: string) {
    const url = `${env.NEXTJS_PUBLIC_URL}/api/revalidate/path`
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            path: path,
            secret: env.NEXTJS_REVALIDATE_SECRET,
        }),
    })
    return await res.json()
}