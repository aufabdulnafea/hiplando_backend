
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Horse
 * 
 */
export type Horse = $Result.DefaultSelection<Prisma.$HorsePayload>
/**
 * Model HorseCategory
 * 
 */
export type HorseCategory = $Result.DefaultSelection<Prisma.$HorseCategoryPayload>
/**
 * Model HorseGender
 * 
 */
export type HorseGender = $Result.DefaultSelection<Prisma.$HorseGenderPayload>
/**
 * Model HorseImage
 * 
 */
export type HorseImage = $Result.DefaultSelection<Prisma.$HorseImagePayload>
/**
 * Model HorseDiscipline
 * 
 */
export type HorseDiscipline = $Result.DefaultSelection<Prisma.$HorseDisciplinePayload>
/**
 * Model HorseVetReport
 * 
 */
export type HorseVetReport = $Result.DefaultSelection<Prisma.$HorseVetReportPayload>
/**
 * Model HorseXrayResults
 * 
 */
export type HorseXrayResults = $Result.DefaultSelection<Prisma.$HorseXrayResultsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserFavoriteHorses
 * 
 */
export type UserFavoriteHorses = $Result.DefaultSelection<Prisma.$UserFavoriteHorsesPayload>
/**
 * Model UserReview
 * 
 */
export type UserReview = $Result.DefaultSelection<Prisma.$UserReviewPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Horses
 * const horses = await prisma.horse.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Horses
   * const horses = await prisma.horse.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.horse`: Exposes CRUD operations for the **Horse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Horses
    * const horses = await prisma.horse.findMany()
    * ```
    */
  get horse(): Prisma.HorseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horseCategory`: Exposes CRUD operations for the **HorseCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HorseCategories
    * const horseCategories = await prisma.horseCategory.findMany()
    * ```
    */
  get horseCategory(): Prisma.HorseCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horseGender`: Exposes CRUD operations for the **HorseGender** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HorseGenders
    * const horseGenders = await prisma.horseGender.findMany()
    * ```
    */
  get horseGender(): Prisma.HorseGenderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horseImage`: Exposes CRUD operations for the **HorseImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HorseImages
    * const horseImages = await prisma.horseImage.findMany()
    * ```
    */
  get horseImage(): Prisma.HorseImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horseDiscipline`: Exposes CRUD operations for the **HorseDiscipline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HorseDisciplines
    * const horseDisciplines = await prisma.horseDiscipline.findMany()
    * ```
    */
  get horseDiscipline(): Prisma.HorseDisciplineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horseVetReport`: Exposes CRUD operations for the **HorseVetReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HorseVetReports
    * const horseVetReports = await prisma.horseVetReport.findMany()
    * ```
    */
  get horseVetReport(): Prisma.HorseVetReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horseXrayResults`: Exposes CRUD operations for the **HorseXrayResults** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HorseXrayResults
    * const horseXrayResults = await prisma.horseXrayResults.findMany()
    * ```
    */
  get horseXrayResults(): Prisma.HorseXrayResultsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFavoriteHorses`: Exposes CRUD operations for the **UserFavoriteHorses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFavoriteHorses
    * const userFavoriteHorses = await prisma.userFavoriteHorses.findMany()
    * ```
    */
  get userFavoriteHorses(): Prisma.UserFavoriteHorsesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userReview`: Exposes CRUD operations for the **UserReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserReviews
    * const userReviews = await prisma.userReview.findMany()
    * ```
    */
  get userReview(): Prisma.UserReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Horse: 'Horse',
    HorseCategory: 'HorseCategory',
    HorseGender: 'HorseGender',
    HorseImage: 'HorseImage',
    HorseDiscipline: 'HorseDiscipline',
    HorseVetReport: 'HorseVetReport',
    HorseXrayResults: 'HorseXrayResults',
    User: 'User',
    UserFavoriteHorses: 'UserFavoriteHorses',
    UserReview: 'UserReview',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "horse" | "horseCategory" | "horseGender" | "horseImage" | "horseDiscipline" | "horseVetReport" | "horseXrayResults" | "user" | "userFavoriteHorses" | "userReview" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Horse: {
        payload: Prisma.$HorsePayload<ExtArgs>
        fields: Prisma.HorseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorsePayload>
          }
          findFirst: {
            args: Prisma.HorseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorsePayload>
          }
          findMany: {
            args: Prisma.HorseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorsePayload>[]
          }
          create: {
            args: Prisma.HorseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorsePayload>
          }
          createMany: {
            args: Prisma.HorseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HorseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorsePayload>[]
          }
          delete: {
            args: Prisma.HorseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorsePayload>
          }
          update: {
            args: Prisma.HorseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorsePayload>
          }
          deleteMany: {
            args: Prisma.HorseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HorseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorsePayload>[]
          }
          upsert: {
            args: Prisma.HorseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorsePayload>
          }
          aggregate: {
            args: Prisma.HorseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorse>
          }
          groupBy: {
            args: Prisma.HorseGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorseGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorseCountArgs<ExtArgs>
            result: $Utils.Optional<HorseCountAggregateOutputType> | number
          }
        }
      }
      HorseCategory: {
        payload: Prisma.$HorseCategoryPayload<ExtArgs>
        fields: Prisma.HorseCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorseCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorseCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseCategoryPayload>
          }
          findFirst: {
            args: Prisma.HorseCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorseCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseCategoryPayload>
          }
          findMany: {
            args: Prisma.HorseCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseCategoryPayload>[]
          }
          create: {
            args: Prisma.HorseCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseCategoryPayload>
          }
          createMany: {
            args: Prisma.HorseCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HorseCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseCategoryPayload>[]
          }
          delete: {
            args: Prisma.HorseCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseCategoryPayload>
          }
          update: {
            args: Prisma.HorseCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseCategoryPayload>
          }
          deleteMany: {
            args: Prisma.HorseCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorseCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HorseCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseCategoryPayload>[]
          }
          upsert: {
            args: Prisma.HorseCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseCategoryPayload>
          }
          aggregate: {
            args: Prisma.HorseCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorseCategory>
          }
          groupBy: {
            args: Prisma.HorseCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorseCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorseCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<HorseCategoryCountAggregateOutputType> | number
          }
        }
      }
      HorseGender: {
        payload: Prisma.$HorseGenderPayload<ExtArgs>
        fields: Prisma.HorseGenderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorseGenderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseGenderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorseGenderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseGenderPayload>
          }
          findFirst: {
            args: Prisma.HorseGenderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseGenderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorseGenderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseGenderPayload>
          }
          findMany: {
            args: Prisma.HorseGenderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseGenderPayload>[]
          }
          create: {
            args: Prisma.HorseGenderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseGenderPayload>
          }
          createMany: {
            args: Prisma.HorseGenderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HorseGenderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseGenderPayload>[]
          }
          delete: {
            args: Prisma.HorseGenderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseGenderPayload>
          }
          update: {
            args: Prisma.HorseGenderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseGenderPayload>
          }
          deleteMany: {
            args: Prisma.HorseGenderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorseGenderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HorseGenderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseGenderPayload>[]
          }
          upsert: {
            args: Prisma.HorseGenderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseGenderPayload>
          }
          aggregate: {
            args: Prisma.HorseGenderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorseGender>
          }
          groupBy: {
            args: Prisma.HorseGenderGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorseGenderGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorseGenderCountArgs<ExtArgs>
            result: $Utils.Optional<HorseGenderCountAggregateOutputType> | number
          }
        }
      }
      HorseImage: {
        payload: Prisma.$HorseImagePayload<ExtArgs>
        fields: Prisma.HorseImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorseImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorseImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseImagePayload>
          }
          findFirst: {
            args: Prisma.HorseImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorseImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseImagePayload>
          }
          findMany: {
            args: Prisma.HorseImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseImagePayload>[]
          }
          create: {
            args: Prisma.HorseImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseImagePayload>
          }
          createMany: {
            args: Prisma.HorseImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HorseImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseImagePayload>[]
          }
          delete: {
            args: Prisma.HorseImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseImagePayload>
          }
          update: {
            args: Prisma.HorseImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseImagePayload>
          }
          deleteMany: {
            args: Prisma.HorseImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorseImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HorseImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseImagePayload>[]
          }
          upsert: {
            args: Prisma.HorseImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseImagePayload>
          }
          aggregate: {
            args: Prisma.HorseImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorseImage>
          }
          groupBy: {
            args: Prisma.HorseImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorseImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorseImageCountArgs<ExtArgs>
            result: $Utils.Optional<HorseImageCountAggregateOutputType> | number
          }
        }
      }
      HorseDiscipline: {
        payload: Prisma.$HorseDisciplinePayload<ExtArgs>
        fields: Prisma.HorseDisciplineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorseDisciplineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseDisciplinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorseDisciplineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseDisciplinePayload>
          }
          findFirst: {
            args: Prisma.HorseDisciplineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseDisciplinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorseDisciplineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseDisciplinePayload>
          }
          findMany: {
            args: Prisma.HorseDisciplineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseDisciplinePayload>[]
          }
          create: {
            args: Prisma.HorseDisciplineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseDisciplinePayload>
          }
          createMany: {
            args: Prisma.HorseDisciplineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HorseDisciplineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseDisciplinePayload>[]
          }
          delete: {
            args: Prisma.HorseDisciplineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseDisciplinePayload>
          }
          update: {
            args: Prisma.HorseDisciplineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseDisciplinePayload>
          }
          deleteMany: {
            args: Prisma.HorseDisciplineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorseDisciplineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HorseDisciplineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseDisciplinePayload>[]
          }
          upsert: {
            args: Prisma.HorseDisciplineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseDisciplinePayload>
          }
          aggregate: {
            args: Prisma.HorseDisciplineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorseDiscipline>
          }
          groupBy: {
            args: Prisma.HorseDisciplineGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorseDisciplineGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorseDisciplineCountArgs<ExtArgs>
            result: $Utils.Optional<HorseDisciplineCountAggregateOutputType> | number
          }
        }
      }
      HorseVetReport: {
        payload: Prisma.$HorseVetReportPayload<ExtArgs>
        fields: Prisma.HorseVetReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorseVetReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseVetReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorseVetReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseVetReportPayload>
          }
          findFirst: {
            args: Prisma.HorseVetReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseVetReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorseVetReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseVetReportPayload>
          }
          findMany: {
            args: Prisma.HorseVetReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseVetReportPayload>[]
          }
          create: {
            args: Prisma.HorseVetReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseVetReportPayload>
          }
          createMany: {
            args: Prisma.HorseVetReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HorseVetReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseVetReportPayload>[]
          }
          delete: {
            args: Prisma.HorseVetReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseVetReportPayload>
          }
          update: {
            args: Prisma.HorseVetReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseVetReportPayload>
          }
          deleteMany: {
            args: Prisma.HorseVetReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorseVetReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HorseVetReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseVetReportPayload>[]
          }
          upsert: {
            args: Prisma.HorseVetReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseVetReportPayload>
          }
          aggregate: {
            args: Prisma.HorseVetReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorseVetReport>
          }
          groupBy: {
            args: Prisma.HorseVetReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorseVetReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorseVetReportCountArgs<ExtArgs>
            result: $Utils.Optional<HorseVetReportCountAggregateOutputType> | number
          }
        }
      }
      HorseXrayResults: {
        payload: Prisma.$HorseXrayResultsPayload<ExtArgs>
        fields: Prisma.HorseXrayResultsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorseXrayResultsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseXrayResultsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorseXrayResultsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseXrayResultsPayload>
          }
          findFirst: {
            args: Prisma.HorseXrayResultsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseXrayResultsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorseXrayResultsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseXrayResultsPayload>
          }
          findMany: {
            args: Prisma.HorseXrayResultsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseXrayResultsPayload>[]
          }
          create: {
            args: Prisma.HorseXrayResultsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseXrayResultsPayload>
          }
          createMany: {
            args: Prisma.HorseXrayResultsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HorseXrayResultsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseXrayResultsPayload>[]
          }
          delete: {
            args: Prisma.HorseXrayResultsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseXrayResultsPayload>
          }
          update: {
            args: Prisma.HorseXrayResultsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseXrayResultsPayload>
          }
          deleteMany: {
            args: Prisma.HorseXrayResultsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorseXrayResultsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HorseXrayResultsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseXrayResultsPayload>[]
          }
          upsert: {
            args: Prisma.HorseXrayResultsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorseXrayResultsPayload>
          }
          aggregate: {
            args: Prisma.HorseXrayResultsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorseXrayResults>
          }
          groupBy: {
            args: Prisma.HorseXrayResultsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorseXrayResultsGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorseXrayResultsCountArgs<ExtArgs>
            result: $Utils.Optional<HorseXrayResultsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserFavoriteHorses: {
        payload: Prisma.$UserFavoriteHorsesPayload<ExtArgs>
        fields: Prisma.UserFavoriteHorsesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFavoriteHorsesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteHorsesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFavoriteHorsesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteHorsesPayload>
          }
          findFirst: {
            args: Prisma.UserFavoriteHorsesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteHorsesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFavoriteHorsesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteHorsesPayload>
          }
          findMany: {
            args: Prisma.UserFavoriteHorsesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteHorsesPayload>[]
          }
          create: {
            args: Prisma.UserFavoriteHorsesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteHorsesPayload>
          }
          createMany: {
            args: Prisma.UserFavoriteHorsesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFavoriteHorsesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteHorsesPayload>[]
          }
          delete: {
            args: Prisma.UserFavoriteHorsesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteHorsesPayload>
          }
          update: {
            args: Prisma.UserFavoriteHorsesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteHorsesPayload>
          }
          deleteMany: {
            args: Prisma.UserFavoriteHorsesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFavoriteHorsesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFavoriteHorsesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteHorsesPayload>[]
          }
          upsert: {
            args: Prisma.UserFavoriteHorsesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteHorsesPayload>
          }
          aggregate: {
            args: Prisma.UserFavoriteHorsesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFavoriteHorses>
          }
          groupBy: {
            args: Prisma.UserFavoriteHorsesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFavoriteHorsesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFavoriteHorsesCountArgs<ExtArgs>
            result: $Utils.Optional<UserFavoriteHorsesCountAggregateOutputType> | number
          }
        }
      }
      UserReview: {
        payload: Prisma.$UserReviewPayload<ExtArgs>
        fields: Prisma.UserReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          findFirst: {
            args: Prisma.UserReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          findMany: {
            args: Prisma.UserReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>[]
          }
          create: {
            args: Prisma.UserReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          createMany: {
            args: Prisma.UserReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>[]
          }
          delete: {
            args: Prisma.UserReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          update: {
            args: Prisma.UserReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          deleteMany: {
            args: Prisma.UserReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>[]
          }
          upsert: {
            args: Prisma.UserReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          aggregate: {
            args: Prisma.UserReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserReview>
          }
          groupBy: {
            args: Prisma.UserReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserReviewCountArgs<ExtArgs>
            result: $Utils.Optional<UserReviewCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    horse?: HorseOmit
    horseCategory?: HorseCategoryOmit
    horseGender?: HorseGenderOmit
    horseImage?: HorseImageOmit
    horseDiscipline?: HorseDisciplineOmit
    horseVetReport?: HorseVetReportOmit
    horseXrayResults?: HorseXrayResultsOmit
    user?: UserOmit
    userFavoriteHorses?: UserFavoriteHorsesOmit
    userReview?: UserReviewOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type HorseCountOutputType
   */

  export type HorseCountOutputType = {
    images: number
    favoriteByUsers: number
  }

  export type HorseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | HorseCountOutputTypeCountImagesArgs
    favoriteByUsers?: boolean | HorseCountOutputTypeCountFavoriteByUsersArgs
  }

  // Custom InputTypes
  /**
   * HorseCountOutputType without action
   */
  export type HorseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseCountOutputType
     */
    select?: HorseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HorseCountOutputType without action
   */
  export type HorseCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorseImageWhereInput
  }

  /**
   * HorseCountOutputType without action
   */
  export type HorseCountOutputTypeCountFavoriteByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteHorsesWhereInput
  }


  /**
   * Count Type HorseCategoryCountOutputType
   */

  export type HorseCategoryCountOutputType = {
    horses: number
  }

  export type HorseCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horses?: boolean | HorseCategoryCountOutputTypeCountHorsesArgs
  }

  // Custom InputTypes
  /**
   * HorseCategoryCountOutputType without action
   */
  export type HorseCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseCategoryCountOutputType
     */
    select?: HorseCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HorseCategoryCountOutputType without action
   */
  export type HorseCategoryCountOutputTypeCountHorsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorseWhereInput
  }


  /**
   * Count Type HorseGenderCountOutputType
   */

  export type HorseGenderCountOutputType = {
    horses: number
  }

  export type HorseGenderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horses?: boolean | HorseGenderCountOutputTypeCountHorsesArgs
  }

  // Custom InputTypes
  /**
   * HorseGenderCountOutputType without action
   */
  export type HorseGenderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseGenderCountOutputType
     */
    select?: HorseGenderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HorseGenderCountOutputType without action
   */
  export type HorseGenderCountOutputTypeCountHorsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorseWhereInput
  }


  /**
   * Count Type HorseDisciplineCountOutputType
   */

  export type HorseDisciplineCountOutputType = {
    horses: number
  }

  export type HorseDisciplineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horses?: boolean | HorseDisciplineCountOutputTypeCountHorsesArgs
  }

  // Custom InputTypes
  /**
   * HorseDisciplineCountOutputType without action
   */
  export type HorseDisciplineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseDisciplineCountOutputType
     */
    select?: HorseDisciplineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HorseDisciplineCountOutputType without action
   */
  export type HorseDisciplineCountOutputTypeCountHorsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorseWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userFavoriteHorses: number
    notifications: number
    horses: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFavoriteHorses?: boolean | UserCountOutputTypeCountUserFavoriteHorsesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    horses?: boolean | UserCountOutputTypeCountHorsesArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserFavoriteHorsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteHorsesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHorsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Horse
   */

  export type AggregateHorse = {
    _count: HorseCountAggregateOutputType | null
    _avg: HorseAvgAggregateOutputType | null
    _sum: HorseSumAggregateOutputType | null
    _min: HorseMinAggregateOutputType | null
    _max: HorseMaxAggregateOutputType | null
  }

  export type HorseAvgAggregateOutputType = {
    age: number | null
    height: number | null
    price: number | null
  }

  export type HorseSumAggregateOutputType = {
    age: number | null
    height: number | null
    price: number | null
  }

  export type HorseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    categoryId: string | null
    name: string | null
    pedigree: string | null
    age: number | null
    genderId: string | null
    height: number | null
    disciplineId: string | null
    location: string | null
    price: number | null
    description: string | null
    veterinaryDocumentAvailable: boolean | null
    xrayResultsAvailable: boolean | null
    videoUrl: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    categoryId: string | null
    name: string | null
    pedigree: string | null
    age: number | null
    genderId: string | null
    height: number | null
    disciplineId: string | null
    location: string | null
    price: number | null
    description: string | null
    veterinaryDocumentAvailable: boolean | null
    xrayResultsAvailable: boolean | null
    videoUrl: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorseCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    name: number
    pedigree: number
    age: number
    genderId: number
    height: number
    disciplineId: number
    location: number
    price: number
    description: number
    veterinaryDocumentAvailable: number
    xrayResultsAvailable: number
    videoUrl: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HorseAvgAggregateInputType = {
    age?: true
    height?: true
    price?: true
  }

  export type HorseSumAggregateInputType = {
    age?: true
    height?: true
    price?: true
  }

  export type HorseMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    name?: true
    pedigree?: true
    age?: true
    genderId?: true
    height?: true
    disciplineId?: true
    location?: true
    price?: true
    description?: true
    veterinaryDocumentAvailable?: true
    xrayResultsAvailable?: true
    videoUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorseMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    name?: true
    pedigree?: true
    age?: true
    genderId?: true
    height?: true
    disciplineId?: true
    location?: true
    price?: true
    description?: true
    veterinaryDocumentAvailable?: true
    xrayResultsAvailable?: true
    videoUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorseCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    name?: true
    pedigree?: true
    age?: true
    genderId?: true
    height?: true
    disciplineId?: true
    location?: true
    price?: true
    description?: true
    veterinaryDocumentAvailable?: true
    xrayResultsAvailable?: true
    videoUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HorseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Horse to aggregate.
     */
    where?: HorseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horses to fetch.
     */
    orderBy?: HorseOrderByWithRelationInput | HorseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Horses
    **/
    _count?: true | HorseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HorseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HorseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorseMaxAggregateInputType
  }

  export type GetHorseAggregateType<T extends HorseAggregateArgs> = {
        [P in keyof T & keyof AggregateHorse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorse[P]>
      : GetScalarType<T[P], AggregateHorse[P]>
  }




  export type HorseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorseWhereInput
    orderBy?: HorseOrderByWithAggregationInput | HorseOrderByWithAggregationInput[]
    by: HorseScalarFieldEnum[] | HorseScalarFieldEnum
    having?: HorseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorseCountAggregateInputType | true
    _avg?: HorseAvgAggregateInputType
    _sum?: HorseSumAggregateInputType
    _min?: HorseMinAggregateInputType
    _max?: HorseMaxAggregateInputType
  }

  export type HorseGroupByOutputType = {
    id: string
    userId: string
    categoryId: string
    name: string
    pedigree: string | null
    age: number
    genderId: string
    height: number
    disciplineId: string
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable: boolean
    xrayResultsAvailable: boolean
    videoUrl: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: HorseCountAggregateOutputType | null
    _avg: HorseAvgAggregateOutputType | null
    _sum: HorseSumAggregateOutputType | null
    _min: HorseMinAggregateOutputType | null
    _max: HorseMaxAggregateOutputType | null
  }

  type GetHorseGroupByPayload<T extends HorseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorseGroupByOutputType[P]>
            : GetScalarType<T[P], HorseGroupByOutputType[P]>
        }
      >
    >


  export type HorseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    name?: boolean
    pedigree?: boolean
    age?: boolean
    genderId?: boolean
    height?: boolean
    disciplineId?: boolean
    location?: boolean
    price?: boolean
    description?: boolean
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | HorseCategoryDefaultArgs<ExtArgs>
    gender?: boolean | HorseGenderDefaultArgs<ExtArgs>
    discipline?: boolean | HorseDisciplineDefaultArgs<ExtArgs>
    images?: boolean | Horse$imagesArgs<ExtArgs>
    vetReport?: boolean | Horse$vetReportArgs<ExtArgs>
    xrayResults?: boolean | Horse$xrayResultsArgs<ExtArgs>
    favoriteByUsers?: boolean | Horse$favoriteByUsersArgs<ExtArgs>
    _count?: boolean | HorseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horse"]>

  export type HorseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    name?: boolean
    pedigree?: boolean
    age?: boolean
    genderId?: boolean
    height?: boolean
    disciplineId?: boolean
    location?: boolean
    price?: boolean
    description?: boolean
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | HorseCategoryDefaultArgs<ExtArgs>
    gender?: boolean | HorseGenderDefaultArgs<ExtArgs>
    discipline?: boolean | HorseDisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horse"]>

  export type HorseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    name?: boolean
    pedigree?: boolean
    age?: boolean
    genderId?: boolean
    height?: boolean
    disciplineId?: boolean
    location?: boolean
    price?: boolean
    description?: boolean
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | HorseCategoryDefaultArgs<ExtArgs>
    gender?: boolean | HorseGenderDefaultArgs<ExtArgs>
    discipline?: boolean | HorseDisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horse"]>

  export type HorseSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    name?: boolean
    pedigree?: boolean
    age?: boolean
    genderId?: boolean
    height?: boolean
    disciplineId?: boolean
    location?: boolean
    price?: boolean
    description?: boolean
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HorseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "categoryId" | "name" | "pedigree" | "age" | "genderId" | "height" | "disciplineId" | "location" | "price" | "description" | "veterinaryDocumentAvailable" | "xrayResultsAvailable" | "videoUrl" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["horse"]>
  export type HorseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | HorseCategoryDefaultArgs<ExtArgs>
    gender?: boolean | HorseGenderDefaultArgs<ExtArgs>
    discipline?: boolean | HorseDisciplineDefaultArgs<ExtArgs>
    images?: boolean | Horse$imagesArgs<ExtArgs>
    vetReport?: boolean | Horse$vetReportArgs<ExtArgs>
    xrayResults?: boolean | Horse$xrayResultsArgs<ExtArgs>
    favoriteByUsers?: boolean | Horse$favoriteByUsersArgs<ExtArgs>
    _count?: boolean | HorseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HorseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | HorseCategoryDefaultArgs<ExtArgs>
    gender?: boolean | HorseGenderDefaultArgs<ExtArgs>
    discipline?: boolean | HorseDisciplineDefaultArgs<ExtArgs>
  }
  export type HorseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | HorseCategoryDefaultArgs<ExtArgs>
    gender?: boolean | HorseGenderDefaultArgs<ExtArgs>
    discipline?: boolean | HorseDisciplineDefaultArgs<ExtArgs>
  }

  export type $HorsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Horse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$HorseCategoryPayload<ExtArgs>
      gender: Prisma.$HorseGenderPayload<ExtArgs>
      discipline: Prisma.$HorseDisciplinePayload<ExtArgs>
      images: Prisma.$HorseImagePayload<ExtArgs>[]
      vetReport: Prisma.$HorseVetReportPayload<ExtArgs> | null
      xrayResults: Prisma.$HorseXrayResultsPayload<ExtArgs> | null
      favoriteByUsers: Prisma.$UserFavoriteHorsesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      categoryId: string
      name: string
      pedigree: string | null
      age: number
      genderId: string
      height: number
      disciplineId: string
      location: string
      price: number
      description: string
      veterinaryDocumentAvailable: boolean
      xrayResultsAvailable: boolean
      videoUrl: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["horse"]>
    composites: {}
  }

  type HorseGetPayload<S extends boolean | null | undefined | HorseDefaultArgs> = $Result.GetResult<Prisma.$HorsePayload, S>

  type HorseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorseCountAggregateInputType | true
    }

  export interface HorseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Horse'], meta: { name: 'Horse' } }
    /**
     * Find zero or one Horse that matches the filter.
     * @param {HorseFindUniqueArgs} args - Arguments to find a Horse
     * @example
     * // Get one Horse
     * const horse = await prisma.horse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorseFindUniqueArgs>(args: SelectSubset<T, HorseFindUniqueArgs<ExtArgs>>): Prisma__HorseClient<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Horse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorseFindUniqueOrThrowArgs} args - Arguments to find a Horse
     * @example
     * // Get one Horse
     * const horse = await prisma.horse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorseFindUniqueOrThrowArgs>(args: SelectSubset<T, HorseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorseClient<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseFindFirstArgs} args - Arguments to find a Horse
     * @example
     * // Get one Horse
     * const horse = await prisma.horse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorseFindFirstArgs>(args?: SelectSubset<T, HorseFindFirstArgs<ExtArgs>>): Prisma__HorseClient<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseFindFirstOrThrowArgs} args - Arguments to find a Horse
     * @example
     * // Get one Horse
     * const horse = await prisma.horse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorseFindFirstOrThrowArgs>(args?: SelectSubset<T, HorseFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorseClient<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Horses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Horses
     * const horses = await prisma.horse.findMany()
     * 
     * // Get first 10 Horses
     * const horses = await prisma.horse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horseWithIdOnly = await prisma.horse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorseFindManyArgs>(args?: SelectSubset<T, HorseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Horse.
     * @param {HorseCreateArgs} args - Arguments to create a Horse.
     * @example
     * // Create one Horse
     * const Horse = await prisma.horse.create({
     *   data: {
     *     // ... data to create a Horse
     *   }
     * })
     * 
     */
    create<T extends HorseCreateArgs>(args: SelectSubset<T, HorseCreateArgs<ExtArgs>>): Prisma__HorseClient<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Horses.
     * @param {HorseCreateManyArgs} args - Arguments to create many Horses.
     * @example
     * // Create many Horses
     * const horse = await prisma.horse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorseCreateManyArgs>(args?: SelectSubset<T, HorseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Horses and returns the data saved in the database.
     * @param {HorseCreateManyAndReturnArgs} args - Arguments to create many Horses.
     * @example
     * // Create many Horses
     * const horse = await prisma.horse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Horses and only return the `id`
     * const horseWithIdOnly = await prisma.horse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HorseCreateManyAndReturnArgs>(args?: SelectSubset<T, HorseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Horse.
     * @param {HorseDeleteArgs} args - Arguments to delete one Horse.
     * @example
     * // Delete one Horse
     * const Horse = await prisma.horse.delete({
     *   where: {
     *     // ... filter to delete one Horse
     *   }
     * })
     * 
     */
    delete<T extends HorseDeleteArgs>(args: SelectSubset<T, HorseDeleteArgs<ExtArgs>>): Prisma__HorseClient<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Horse.
     * @param {HorseUpdateArgs} args - Arguments to update one Horse.
     * @example
     * // Update one Horse
     * const horse = await prisma.horse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorseUpdateArgs>(args: SelectSubset<T, HorseUpdateArgs<ExtArgs>>): Prisma__HorseClient<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Horses.
     * @param {HorseDeleteManyArgs} args - Arguments to filter Horses to delete.
     * @example
     * // Delete a few Horses
     * const { count } = await prisma.horse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorseDeleteManyArgs>(args?: SelectSubset<T, HorseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Horses
     * const horse = await prisma.horse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorseUpdateManyArgs>(args: SelectSubset<T, HorseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horses and returns the data updated in the database.
     * @param {HorseUpdateManyAndReturnArgs} args - Arguments to update many Horses.
     * @example
     * // Update many Horses
     * const horse = await prisma.horse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Horses and only return the `id`
     * const horseWithIdOnly = await prisma.horse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HorseUpdateManyAndReturnArgs>(args: SelectSubset<T, HorseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Horse.
     * @param {HorseUpsertArgs} args - Arguments to update or create a Horse.
     * @example
     * // Update or create a Horse
     * const horse = await prisma.horse.upsert({
     *   create: {
     *     // ... data to create a Horse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Horse we want to update
     *   }
     * })
     */
    upsert<T extends HorseUpsertArgs>(args: SelectSubset<T, HorseUpsertArgs<ExtArgs>>): Prisma__HorseClient<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Horses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseCountArgs} args - Arguments to filter Horses to count.
     * @example
     * // Count the number of Horses
     * const count = await prisma.horse.count({
     *   where: {
     *     // ... the filter for the Horses we want to count
     *   }
     * })
    **/
    count<T extends HorseCountArgs>(
      args?: Subset<T, HorseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Horse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HorseAggregateArgs>(args: Subset<T, HorseAggregateArgs>): Prisma.PrismaPromise<GetHorseAggregateType<T>>

    /**
     * Group by Horse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HorseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorseGroupByArgs['orderBy'] }
        : { orderBy?: HorseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HorseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Horse model
   */
  readonly fields: HorseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Horse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends HorseCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HorseCategoryDefaultArgs<ExtArgs>>): Prisma__HorseCategoryClient<$Result.GetResult<Prisma.$HorseCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gender<T extends HorseGenderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HorseGenderDefaultArgs<ExtArgs>>): Prisma__HorseGenderClient<$Result.GetResult<Prisma.$HorseGenderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    discipline<T extends HorseDisciplineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HorseDisciplineDefaultArgs<ExtArgs>>): Prisma__HorseDisciplineClient<$Result.GetResult<Prisma.$HorseDisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Horse$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Horse$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vetReport<T extends Horse$vetReportArgs<ExtArgs> = {}>(args?: Subset<T, Horse$vetReportArgs<ExtArgs>>): Prisma__HorseVetReportClient<$Result.GetResult<Prisma.$HorseVetReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    xrayResults<T extends Horse$xrayResultsArgs<ExtArgs> = {}>(args?: Subset<T, Horse$xrayResultsArgs<ExtArgs>>): Prisma__HorseXrayResultsClient<$Result.GetResult<Prisma.$HorseXrayResultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    favoriteByUsers<T extends Horse$favoriteByUsersArgs<ExtArgs> = {}>(args?: Subset<T, Horse$favoriteByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoriteHorsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Horse model
   */
  interface HorseFieldRefs {
    readonly id: FieldRef<"Horse", 'String'>
    readonly userId: FieldRef<"Horse", 'String'>
    readonly categoryId: FieldRef<"Horse", 'String'>
    readonly name: FieldRef<"Horse", 'String'>
    readonly pedigree: FieldRef<"Horse", 'String'>
    readonly age: FieldRef<"Horse", 'Int'>
    readonly genderId: FieldRef<"Horse", 'String'>
    readonly height: FieldRef<"Horse", 'Int'>
    readonly disciplineId: FieldRef<"Horse", 'String'>
    readonly location: FieldRef<"Horse", 'String'>
    readonly price: FieldRef<"Horse", 'Float'>
    readonly description: FieldRef<"Horse", 'String'>
    readonly veterinaryDocumentAvailable: FieldRef<"Horse", 'Boolean'>
    readonly xrayResultsAvailable: FieldRef<"Horse", 'Boolean'>
    readonly videoUrl: FieldRef<"Horse", 'String'>
    readonly status: FieldRef<"Horse", 'String'>
    readonly createdAt: FieldRef<"Horse", 'DateTime'>
    readonly updatedAt: FieldRef<"Horse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Horse findUnique
   */
  export type HorseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseInclude<ExtArgs> | null
    /**
     * Filter, which Horse to fetch.
     */
    where: HorseWhereUniqueInput
  }

  /**
   * Horse findUniqueOrThrow
   */
  export type HorseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseInclude<ExtArgs> | null
    /**
     * Filter, which Horse to fetch.
     */
    where: HorseWhereUniqueInput
  }

  /**
   * Horse findFirst
   */
  export type HorseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseInclude<ExtArgs> | null
    /**
     * Filter, which Horse to fetch.
     */
    where?: HorseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horses to fetch.
     */
    orderBy?: HorseOrderByWithRelationInput | HorseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Horses.
     */
    cursor?: HorseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Horses.
     */
    distinct?: HorseScalarFieldEnum | HorseScalarFieldEnum[]
  }

  /**
   * Horse findFirstOrThrow
   */
  export type HorseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseInclude<ExtArgs> | null
    /**
     * Filter, which Horse to fetch.
     */
    where?: HorseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horses to fetch.
     */
    orderBy?: HorseOrderByWithRelationInput | HorseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Horses.
     */
    cursor?: HorseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Horses.
     */
    distinct?: HorseScalarFieldEnum | HorseScalarFieldEnum[]
  }

  /**
   * Horse findMany
   */
  export type HorseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseInclude<ExtArgs> | null
    /**
     * Filter, which Horses to fetch.
     */
    where?: HorseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horses to fetch.
     */
    orderBy?: HorseOrderByWithRelationInput | HorseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Horses.
     */
    cursor?: HorseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horses.
     */
    skip?: number
    distinct?: HorseScalarFieldEnum | HorseScalarFieldEnum[]
  }

  /**
   * Horse create
   */
  export type HorseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseInclude<ExtArgs> | null
    /**
     * The data needed to create a Horse.
     */
    data: XOR<HorseCreateInput, HorseUncheckedCreateInput>
  }

  /**
   * Horse createMany
   */
  export type HorseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Horses.
     */
    data: HorseCreateManyInput | HorseCreateManyInput[]
  }

  /**
   * Horse createManyAndReturn
   */
  export type HorseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * The data used to create many Horses.
     */
    data: HorseCreateManyInput | HorseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Horse update
   */
  export type HorseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseInclude<ExtArgs> | null
    /**
     * The data needed to update a Horse.
     */
    data: XOR<HorseUpdateInput, HorseUncheckedUpdateInput>
    /**
     * Choose, which Horse to update.
     */
    where: HorseWhereUniqueInput
  }

  /**
   * Horse updateMany
   */
  export type HorseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Horses.
     */
    data: XOR<HorseUpdateManyMutationInput, HorseUncheckedUpdateManyInput>
    /**
     * Filter which Horses to update
     */
    where?: HorseWhereInput
    /**
     * Limit how many Horses to update.
     */
    limit?: number
  }

  /**
   * Horse updateManyAndReturn
   */
  export type HorseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * The data used to update Horses.
     */
    data: XOR<HorseUpdateManyMutationInput, HorseUncheckedUpdateManyInput>
    /**
     * Filter which Horses to update
     */
    where?: HorseWhereInput
    /**
     * Limit how many Horses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Horse upsert
   */
  export type HorseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseInclude<ExtArgs> | null
    /**
     * The filter to search for the Horse to update in case it exists.
     */
    where: HorseWhereUniqueInput
    /**
     * In case the Horse found by the `where` argument doesn't exist, create a new Horse with this data.
     */
    create: XOR<HorseCreateInput, HorseUncheckedCreateInput>
    /**
     * In case the Horse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorseUpdateInput, HorseUncheckedUpdateInput>
  }

  /**
   * Horse delete
   */
  export type HorseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseInclude<ExtArgs> | null
    /**
     * Filter which Horse to delete.
     */
    where: HorseWhereUniqueInput
  }

  /**
   * Horse deleteMany
   */
  export type HorseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Horses to delete
     */
    where?: HorseWhereInput
    /**
     * Limit how many Horses to delete.
     */
    limit?: number
  }

  /**
   * Horse.images
   */
  export type Horse$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseImage
     */
    select?: HorseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseImage
     */
    omit?: HorseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseImageInclude<ExtArgs> | null
    where?: HorseImageWhereInput
    orderBy?: HorseImageOrderByWithRelationInput | HorseImageOrderByWithRelationInput[]
    cursor?: HorseImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorseImageScalarFieldEnum | HorseImageScalarFieldEnum[]
  }

  /**
   * Horse.vetReport
   */
  export type Horse$vetReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseVetReport
     */
    select?: HorseVetReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseVetReport
     */
    omit?: HorseVetReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseVetReportInclude<ExtArgs> | null
    where?: HorseVetReportWhereInput
  }

  /**
   * Horse.xrayResults
   */
  export type Horse$xrayResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseXrayResults
     */
    select?: HorseXrayResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseXrayResults
     */
    omit?: HorseXrayResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseXrayResultsInclude<ExtArgs> | null
    where?: HorseXrayResultsWhereInput
  }

  /**
   * Horse.favoriteByUsers
   */
  export type Horse$favoriteByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteHorses
     */
    select?: UserFavoriteHorsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteHorses
     */
    omit?: UserFavoriteHorsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteHorsesInclude<ExtArgs> | null
    where?: UserFavoriteHorsesWhereInput
    orderBy?: UserFavoriteHorsesOrderByWithRelationInput | UserFavoriteHorsesOrderByWithRelationInput[]
    cursor?: UserFavoriteHorsesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavoriteHorsesScalarFieldEnum | UserFavoriteHorsesScalarFieldEnum[]
  }

  /**
   * Horse without action
   */
  export type HorseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseInclude<ExtArgs> | null
  }


  /**
   * Model HorseCategory
   */

  export type AggregateHorseCategory = {
    _count: HorseCategoryCountAggregateOutputType | null
    _min: HorseCategoryMinAggregateOutputType | null
    _max: HorseCategoryMaxAggregateOutputType | null
  }

  export type HorseCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorseCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorseCategoryCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HorseCategoryMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorseCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorseCategoryCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HorseCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorseCategory to aggregate.
     */
    where?: HorseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseCategories to fetch.
     */
    orderBy?: HorseCategoryOrderByWithRelationInput | HorseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HorseCategories
    **/
    _count?: true | HorseCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorseCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorseCategoryMaxAggregateInputType
  }

  export type GetHorseCategoryAggregateType<T extends HorseCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHorseCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorseCategory[P]>
      : GetScalarType<T[P], AggregateHorseCategory[P]>
  }




  export type HorseCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorseCategoryWhereInput
    orderBy?: HorseCategoryOrderByWithAggregationInput | HorseCategoryOrderByWithAggregationInput[]
    by: HorseCategoryScalarFieldEnum[] | HorseCategoryScalarFieldEnum
    having?: HorseCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorseCategoryCountAggregateInputType | true
    _min?: HorseCategoryMinAggregateInputType
    _max?: HorseCategoryMaxAggregateInputType
  }

  export type HorseCategoryGroupByOutputType = {
    id: string
    name: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: HorseCategoryCountAggregateOutputType | null
    _min: HorseCategoryMinAggregateOutputType | null
    _max: HorseCategoryMaxAggregateOutputType | null
  }

  type GetHorseCategoryGroupByPayload<T extends HorseCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorseCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorseCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorseCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], HorseCategoryGroupByOutputType[P]>
        }
      >
    >


  export type HorseCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    horses?: boolean | HorseCategory$horsesArgs<ExtArgs>
    _count?: boolean | HorseCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horseCategory"]>

  export type HorseCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["horseCategory"]>

  export type HorseCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["horseCategory"]>

  export type HorseCategorySelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HorseCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["horseCategory"]>
  export type HorseCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horses?: boolean | HorseCategory$horsesArgs<ExtArgs>
    _count?: boolean | HorseCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HorseCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HorseCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HorseCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HorseCategory"
    objects: {
      horses: Prisma.$HorsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      imageUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["horseCategory"]>
    composites: {}
  }

  type HorseCategoryGetPayload<S extends boolean | null | undefined | HorseCategoryDefaultArgs> = $Result.GetResult<Prisma.$HorseCategoryPayload, S>

  type HorseCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorseCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorseCategoryCountAggregateInputType | true
    }

  export interface HorseCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HorseCategory'], meta: { name: 'HorseCategory' } }
    /**
     * Find zero or one HorseCategory that matches the filter.
     * @param {HorseCategoryFindUniqueArgs} args - Arguments to find a HorseCategory
     * @example
     * // Get one HorseCategory
     * const horseCategory = await prisma.horseCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorseCategoryFindUniqueArgs>(args: SelectSubset<T, HorseCategoryFindUniqueArgs<ExtArgs>>): Prisma__HorseCategoryClient<$Result.GetResult<Prisma.$HorseCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HorseCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorseCategoryFindUniqueOrThrowArgs} args - Arguments to find a HorseCategory
     * @example
     * // Get one HorseCategory
     * const horseCategory = await prisma.horseCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorseCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, HorseCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorseCategoryClient<$Result.GetResult<Prisma.$HorseCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorseCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseCategoryFindFirstArgs} args - Arguments to find a HorseCategory
     * @example
     * // Get one HorseCategory
     * const horseCategory = await prisma.horseCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorseCategoryFindFirstArgs>(args?: SelectSubset<T, HorseCategoryFindFirstArgs<ExtArgs>>): Prisma__HorseCategoryClient<$Result.GetResult<Prisma.$HorseCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorseCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseCategoryFindFirstOrThrowArgs} args - Arguments to find a HorseCategory
     * @example
     * // Get one HorseCategory
     * const horseCategory = await prisma.horseCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorseCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, HorseCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorseCategoryClient<$Result.GetResult<Prisma.$HorseCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HorseCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HorseCategories
     * const horseCategories = await prisma.horseCategory.findMany()
     * 
     * // Get first 10 HorseCategories
     * const horseCategories = await prisma.horseCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horseCategoryWithIdOnly = await prisma.horseCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorseCategoryFindManyArgs>(args?: SelectSubset<T, HorseCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HorseCategory.
     * @param {HorseCategoryCreateArgs} args - Arguments to create a HorseCategory.
     * @example
     * // Create one HorseCategory
     * const HorseCategory = await prisma.horseCategory.create({
     *   data: {
     *     // ... data to create a HorseCategory
     *   }
     * })
     * 
     */
    create<T extends HorseCategoryCreateArgs>(args: SelectSubset<T, HorseCategoryCreateArgs<ExtArgs>>): Prisma__HorseCategoryClient<$Result.GetResult<Prisma.$HorseCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HorseCategories.
     * @param {HorseCategoryCreateManyArgs} args - Arguments to create many HorseCategories.
     * @example
     * // Create many HorseCategories
     * const horseCategory = await prisma.horseCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorseCategoryCreateManyArgs>(args?: SelectSubset<T, HorseCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HorseCategories and returns the data saved in the database.
     * @param {HorseCategoryCreateManyAndReturnArgs} args - Arguments to create many HorseCategories.
     * @example
     * // Create many HorseCategories
     * const horseCategory = await prisma.horseCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HorseCategories and only return the `id`
     * const horseCategoryWithIdOnly = await prisma.horseCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HorseCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, HorseCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HorseCategory.
     * @param {HorseCategoryDeleteArgs} args - Arguments to delete one HorseCategory.
     * @example
     * // Delete one HorseCategory
     * const HorseCategory = await prisma.horseCategory.delete({
     *   where: {
     *     // ... filter to delete one HorseCategory
     *   }
     * })
     * 
     */
    delete<T extends HorseCategoryDeleteArgs>(args: SelectSubset<T, HorseCategoryDeleteArgs<ExtArgs>>): Prisma__HorseCategoryClient<$Result.GetResult<Prisma.$HorseCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HorseCategory.
     * @param {HorseCategoryUpdateArgs} args - Arguments to update one HorseCategory.
     * @example
     * // Update one HorseCategory
     * const horseCategory = await prisma.horseCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorseCategoryUpdateArgs>(args: SelectSubset<T, HorseCategoryUpdateArgs<ExtArgs>>): Prisma__HorseCategoryClient<$Result.GetResult<Prisma.$HorseCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HorseCategories.
     * @param {HorseCategoryDeleteManyArgs} args - Arguments to filter HorseCategories to delete.
     * @example
     * // Delete a few HorseCategories
     * const { count } = await prisma.horseCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorseCategoryDeleteManyArgs>(args?: SelectSubset<T, HorseCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorseCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HorseCategories
     * const horseCategory = await prisma.horseCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorseCategoryUpdateManyArgs>(args: SelectSubset<T, HorseCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorseCategories and returns the data updated in the database.
     * @param {HorseCategoryUpdateManyAndReturnArgs} args - Arguments to update many HorseCategories.
     * @example
     * // Update many HorseCategories
     * const horseCategory = await prisma.horseCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HorseCategories and only return the `id`
     * const horseCategoryWithIdOnly = await prisma.horseCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HorseCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, HorseCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HorseCategory.
     * @param {HorseCategoryUpsertArgs} args - Arguments to update or create a HorseCategory.
     * @example
     * // Update or create a HorseCategory
     * const horseCategory = await prisma.horseCategory.upsert({
     *   create: {
     *     // ... data to create a HorseCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HorseCategory we want to update
     *   }
     * })
     */
    upsert<T extends HorseCategoryUpsertArgs>(args: SelectSubset<T, HorseCategoryUpsertArgs<ExtArgs>>): Prisma__HorseCategoryClient<$Result.GetResult<Prisma.$HorseCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HorseCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseCategoryCountArgs} args - Arguments to filter HorseCategories to count.
     * @example
     * // Count the number of HorseCategories
     * const count = await prisma.horseCategory.count({
     *   where: {
     *     // ... the filter for the HorseCategories we want to count
     *   }
     * })
    **/
    count<T extends HorseCategoryCountArgs>(
      args?: Subset<T, HorseCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorseCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HorseCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HorseCategoryAggregateArgs>(args: Subset<T, HorseCategoryAggregateArgs>): Prisma.PrismaPromise<GetHorseCategoryAggregateType<T>>

    /**
     * Group by HorseCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HorseCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorseCategoryGroupByArgs['orderBy'] }
        : { orderBy?: HorseCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HorseCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorseCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HorseCategory model
   */
  readonly fields: HorseCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HorseCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorseCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    horses<T extends HorseCategory$horsesArgs<ExtArgs> = {}>(args?: Subset<T, HorseCategory$horsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HorseCategory model
   */
  interface HorseCategoryFieldRefs {
    readonly id: FieldRef<"HorseCategory", 'String'>
    readonly name: FieldRef<"HorseCategory", 'String'>
    readonly imageUrl: FieldRef<"HorseCategory", 'String'>
    readonly createdAt: FieldRef<"HorseCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"HorseCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HorseCategory findUnique
   */
  export type HorseCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseCategory
     */
    select?: HorseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseCategory
     */
    omit?: HorseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which HorseCategory to fetch.
     */
    where: HorseCategoryWhereUniqueInput
  }

  /**
   * HorseCategory findUniqueOrThrow
   */
  export type HorseCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseCategory
     */
    select?: HorseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseCategory
     */
    omit?: HorseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which HorseCategory to fetch.
     */
    where: HorseCategoryWhereUniqueInput
  }

  /**
   * HorseCategory findFirst
   */
  export type HorseCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseCategory
     */
    select?: HorseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseCategory
     */
    omit?: HorseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which HorseCategory to fetch.
     */
    where?: HorseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseCategories to fetch.
     */
    orderBy?: HorseCategoryOrderByWithRelationInput | HorseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorseCategories.
     */
    cursor?: HorseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorseCategories.
     */
    distinct?: HorseCategoryScalarFieldEnum | HorseCategoryScalarFieldEnum[]
  }

  /**
   * HorseCategory findFirstOrThrow
   */
  export type HorseCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseCategory
     */
    select?: HorseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseCategory
     */
    omit?: HorseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which HorseCategory to fetch.
     */
    where?: HorseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseCategories to fetch.
     */
    orderBy?: HorseCategoryOrderByWithRelationInput | HorseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorseCategories.
     */
    cursor?: HorseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorseCategories.
     */
    distinct?: HorseCategoryScalarFieldEnum | HorseCategoryScalarFieldEnum[]
  }

  /**
   * HorseCategory findMany
   */
  export type HorseCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseCategory
     */
    select?: HorseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseCategory
     */
    omit?: HorseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which HorseCategories to fetch.
     */
    where?: HorseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseCategories to fetch.
     */
    orderBy?: HorseCategoryOrderByWithRelationInput | HorseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HorseCategories.
     */
    cursor?: HorseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseCategories.
     */
    skip?: number
    distinct?: HorseCategoryScalarFieldEnum | HorseCategoryScalarFieldEnum[]
  }

  /**
   * HorseCategory create
   */
  export type HorseCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseCategory
     */
    select?: HorseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseCategory
     */
    omit?: HorseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a HorseCategory.
     */
    data: XOR<HorseCategoryCreateInput, HorseCategoryUncheckedCreateInput>
  }

  /**
   * HorseCategory createMany
   */
  export type HorseCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HorseCategories.
     */
    data: HorseCategoryCreateManyInput | HorseCategoryCreateManyInput[]
  }

  /**
   * HorseCategory createManyAndReturn
   */
  export type HorseCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseCategory
     */
    select?: HorseCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorseCategory
     */
    omit?: HorseCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many HorseCategories.
     */
    data: HorseCategoryCreateManyInput | HorseCategoryCreateManyInput[]
  }

  /**
   * HorseCategory update
   */
  export type HorseCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseCategory
     */
    select?: HorseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseCategory
     */
    omit?: HorseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a HorseCategory.
     */
    data: XOR<HorseCategoryUpdateInput, HorseCategoryUncheckedUpdateInput>
    /**
     * Choose, which HorseCategory to update.
     */
    where: HorseCategoryWhereUniqueInput
  }

  /**
   * HorseCategory updateMany
   */
  export type HorseCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HorseCategories.
     */
    data: XOR<HorseCategoryUpdateManyMutationInput, HorseCategoryUncheckedUpdateManyInput>
    /**
     * Filter which HorseCategories to update
     */
    where?: HorseCategoryWhereInput
    /**
     * Limit how many HorseCategories to update.
     */
    limit?: number
  }

  /**
   * HorseCategory updateManyAndReturn
   */
  export type HorseCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseCategory
     */
    select?: HorseCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorseCategory
     */
    omit?: HorseCategoryOmit<ExtArgs> | null
    /**
     * The data used to update HorseCategories.
     */
    data: XOR<HorseCategoryUpdateManyMutationInput, HorseCategoryUncheckedUpdateManyInput>
    /**
     * Filter which HorseCategories to update
     */
    where?: HorseCategoryWhereInput
    /**
     * Limit how many HorseCategories to update.
     */
    limit?: number
  }

  /**
   * HorseCategory upsert
   */
  export type HorseCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseCategory
     */
    select?: HorseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseCategory
     */
    omit?: HorseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the HorseCategory to update in case it exists.
     */
    where: HorseCategoryWhereUniqueInput
    /**
     * In case the HorseCategory found by the `where` argument doesn't exist, create a new HorseCategory with this data.
     */
    create: XOR<HorseCategoryCreateInput, HorseCategoryUncheckedCreateInput>
    /**
     * In case the HorseCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorseCategoryUpdateInput, HorseCategoryUncheckedUpdateInput>
  }

  /**
   * HorseCategory delete
   */
  export type HorseCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseCategory
     */
    select?: HorseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseCategory
     */
    omit?: HorseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseCategoryInclude<ExtArgs> | null
    /**
     * Filter which HorseCategory to delete.
     */
    where: HorseCategoryWhereUniqueInput
  }

  /**
   * HorseCategory deleteMany
   */
  export type HorseCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorseCategories to delete
     */
    where?: HorseCategoryWhereInput
    /**
     * Limit how many HorseCategories to delete.
     */
    limit?: number
  }

  /**
   * HorseCategory.horses
   */
  export type HorseCategory$horsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseInclude<ExtArgs> | null
    where?: HorseWhereInput
    orderBy?: HorseOrderByWithRelationInput | HorseOrderByWithRelationInput[]
    cursor?: HorseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorseScalarFieldEnum | HorseScalarFieldEnum[]
  }

  /**
   * HorseCategory without action
   */
  export type HorseCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseCategory
     */
    select?: HorseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseCategory
     */
    omit?: HorseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseCategoryInclude<ExtArgs> | null
  }


  /**
   * Model HorseGender
   */

  export type AggregateHorseGender = {
    _count: HorseGenderCountAggregateOutputType | null
    _min: HorseGenderMinAggregateOutputType | null
    _max: HorseGenderMaxAggregateOutputType | null
  }

  export type HorseGenderMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorseGenderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorseGenderCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HorseGenderMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorseGenderMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorseGenderCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HorseGenderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorseGender to aggregate.
     */
    where?: HorseGenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseGenders to fetch.
     */
    orderBy?: HorseGenderOrderByWithRelationInput | HorseGenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorseGenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseGenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseGenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HorseGenders
    **/
    _count?: true | HorseGenderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorseGenderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorseGenderMaxAggregateInputType
  }

  export type GetHorseGenderAggregateType<T extends HorseGenderAggregateArgs> = {
        [P in keyof T & keyof AggregateHorseGender]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorseGender[P]>
      : GetScalarType<T[P], AggregateHorseGender[P]>
  }




  export type HorseGenderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorseGenderWhereInput
    orderBy?: HorseGenderOrderByWithAggregationInput | HorseGenderOrderByWithAggregationInput[]
    by: HorseGenderScalarFieldEnum[] | HorseGenderScalarFieldEnum
    having?: HorseGenderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorseGenderCountAggregateInputType | true
    _min?: HorseGenderMinAggregateInputType
    _max?: HorseGenderMaxAggregateInputType
  }

  export type HorseGenderGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: HorseGenderCountAggregateOutputType | null
    _min: HorseGenderMinAggregateOutputType | null
    _max: HorseGenderMaxAggregateOutputType | null
  }

  type GetHorseGenderGroupByPayload<T extends HorseGenderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorseGenderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorseGenderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorseGenderGroupByOutputType[P]>
            : GetScalarType<T[P], HorseGenderGroupByOutputType[P]>
        }
      >
    >


  export type HorseGenderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    horses?: boolean | HorseGender$horsesArgs<ExtArgs>
    _count?: boolean | HorseGenderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horseGender"]>

  export type HorseGenderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["horseGender"]>

  export type HorseGenderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["horseGender"]>

  export type HorseGenderSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HorseGenderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["horseGender"]>
  export type HorseGenderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horses?: boolean | HorseGender$horsesArgs<ExtArgs>
    _count?: boolean | HorseGenderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HorseGenderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HorseGenderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HorseGenderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HorseGender"
    objects: {
      horses: Prisma.$HorsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["horseGender"]>
    composites: {}
  }

  type HorseGenderGetPayload<S extends boolean | null | undefined | HorseGenderDefaultArgs> = $Result.GetResult<Prisma.$HorseGenderPayload, S>

  type HorseGenderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorseGenderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorseGenderCountAggregateInputType | true
    }

  export interface HorseGenderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HorseGender'], meta: { name: 'HorseGender' } }
    /**
     * Find zero or one HorseGender that matches the filter.
     * @param {HorseGenderFindUniqueArgs} args - Arguments to find a HorseGender
     * @example
     * // Get one HorseGender
     * const horseGender = await prisma.horseGender.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorseGenderFindUniqueArgs>(args: SelectSubset<T, HorseGenderFindUniqueArgs<ExtArgs>>): Prisma__HorseGenderClient<$Result.GetResult<Prisma.$HorseGenderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HorseGender that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorseGenderFindUniqueOrThrowArgs} args - Arguments to find a HorseGender
     * @example
     * // Get one HorseGender
     * const horseGender = await prisma.horseGender.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorseGenderFindUniqueOrThrowArgs>(args: SelectSubset<T, HorseGenderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorseGenderClient<$Result.GetResult<Prisma.$HorseGenderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorseGender that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseGenderFindFirstArgs} args - Arguments to find a HorseGender
     * @example
     * // Get one HorseGender
     * const horseGender = await prisma.horseGender.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorseGenderFindFirstArgs>(args?: SelectSubset<T, HorseGenderFindFirstArgs<ExtArgs>>): Prisma__HorseGenderClient<$Result.GetResult<Prisma.$HorseGenderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorseGender that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseGenderFindFirstOrThrowArgs} args - Arguments to find a HorseGender
     * @example
     * // Get one HorseGender
     * const horseGender = await prisma.horseGender.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorseGenderFindFirstOrThrowArgs>(args?: SelectSubset<T, HorseGenderFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorseGenderClient<$Result.GetResult<Prisma.$HorseGenderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HorseGenders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseGenderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HorseGenders
     * const horseGenders = await prisma.horseGender.findMany()
     * 
     * // Get first 10 HorseGenders
     * const horseGenders = await prisma.horseGender.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horseGenderWithIdOnly = await prisma.horseGender.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorseGenderFindManyArgs>(args?: SelectSubset<T, HorseGenderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseGenderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HorseGender.
     * @param {HorseGenderCreateArgs} args - Arguments to create a HorseGender.
     * @example
     * // Create one HorseGender
     * const HorseGender = await prisma.horseGender.create({
     *   data: {
     *     // ... data to create a HorseGender
     *   }
     * })
     * 
     */
    create<T extends HorseGenderCreateArgs>(args: SelectSubset<T, HorseGenderCreateArgs<ExtArgs>>): Prisma__HorseGenderClient<$Result.GetResult<Prisma.$HorseGenderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HorseGenders.
     * @param {HorseGenderCreateManyArgs} args - Arguments to create many HorseGenders.
     * @example
     * // Create many HorseGenders
     * const horseGender = await prisma.horseGender.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorseGenderCreateManyArgs>(args?: SelectSubset<T, HorseGenderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HorseGenders and returns the data saved in the database.
     * @param {HorseGenderCreateManyAndReturnArgs} args - Arguments to create many HorseGenders.
     * @example
     * // Create many HorseGenders
     * const horseGender = await prisma.horseGender.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HorseGenders and only return the `id`
     * const horseGenderWithIdOnly = await prisma.horseGender.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HorseGenderCreateManyAndReturnArgs>(args?: SelectSubset<T, HorseGenderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseGenderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HorseGender.
     * @param {HorseGenderDeleteArgs} args - Arguments to delete one HorseGender.
     * @example
     * // Delete one HorseGender
     * const HorseGender = await prisma.horseGender.delete({
     *   where: {
     *     // ... filter to delete one HorseGender
     *   }
     * })
     * 
     */
    delete<T extends HorseGenderDeleteArgs>(args: SelectSubset<T, HorseGenderDeleteArgs<ExtArgs>>): Prisma__HorseGenderClient<$Result.GetResult<Prisma.$HorseGenderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HorseGender.
     * @param {HorseGenderUpdateArgs} args - Arguments to update one HorseGender.
     * @example
     * // Update one HorseGender
     * const horseGender = await prisma.horseGender.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorseGenderUpdateArgs>(args: SelectSubset<T, HorseGenderUpdateArgs<ExtArgs>>): Prisma__HorseGenderClient<$Result.GetResult<Prisma.$HorseGenderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HorseGenders.
     * @param {HorseGenderDeleteManyArgs} args - Arguments to filter HorseGenders to delete.
     * @example
     * // Delete a few HorseGenders
     * const { count } = await prisma.horseGender.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorseGenderDeleteManyArgs>(args?: SelectSubset<T, HorseGenderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorseGenders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseGenderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HorseGenders
     * const horseGender = await prisma.horseGender.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorseGenderUpdateManyArgs>(args: SelectSubset<T, HorseGenderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorseGenders and returns the data updated in the database.
     * @param {HorseGenderUpdateManyAndReturnArgs} args - Arguments to update many HorseGenders.
     * @example
     * // Update many HorseGenders
     * const horseGender = await prisma.horseGender.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HorseGenders and only return the `id`
     * const horseGenderWithIdOnly = await prisma.horseGender.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HorseGenderUpdateManyAndReturnArgs>(args: SelectSubset<T, HorseGenderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseGenderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HorseGender.
     * @param {HorseGenderUpsertArgs} args - Arguments to update or create a HorseGender.
     * @example
     * // Update or create a HorseGender
     * const horseGender = await prisma.horseGender.upsert({
     *   create: {
     *     // ... data to create a HorseGender
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HorseGender we want to update
     *   }
     * })
     */
    upsert<T extends HorseGenderUpsertArgs>(args: SelectSubset<T, HorseGenderUpsertArgs<ExtArgs>>): Prisma__HorseGenderClient<$Result.GetResult<Prisma.$HorseGenderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HorseGenders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseGenderCountArgs} args - Arguments to filter HorseGenders to count.
     * @example
     * // Count the number of HorseGenders
     * const count = await prisma.horseGender.count({
     *   where: {
     *     // ... the filter for the HorseGenders we want to count
     *   }
     * })
    **/
    count<T extends HorseGenderCountArgs>(
      args?: Subset<T, HorseGenderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorseGenderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HorseGender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseGenderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HorseGenderAggregateArgs>(args: Subset<T, HorseGenderAggregateArgs>): Prisma.PrismaPromise<GetHorseGenderAggregateType<T>>

    /**
     * Group by HorseGender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseGenderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HorseGenderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorseGenderGroupByArgs['orderBy'] }
        : { orderBy?: HorseGenderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HorseGenderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorseGenderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HorseGender model
   */
  readonly fields: HorseGenderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HorseGender.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorseGenderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    horses<T extends HorseGender$horsesArgs<ExtArgs> = {}>(args?: Subset<T, HorseGender$horsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HorseGender model
   */
  interface HorseGenderFieldRefs {
    readonly id: FieldRef<"HorseGender", 'String'>
    readonly name: FieldRef<"HorseGender", 'String'>
    readonly createdAt: FieldRef<"HorseGender", 'DateTime'>
    readonly updatedAt: FieldRef<"HorseGender", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HorseGender findUnique
   */
  export type HorseGenderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseGender
     */
    select?: HorseGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseGender
     */
    omit?: HorseGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseGenderInclude<ExtArgs> | null
    /**
     * Filter, which HorseGender to fetch.
     */
    where: HorseGenderWhereUniqueInput
  }

  /**
   * HorseGender findUniqueOrThrow
   */
  export type HorseGenderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseGender
     */
    select?: HorseGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseGender
     */
    omit?: HorseGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseGenderInclude<ExtArgs> | null
    /**
     * Filter, which HorseGender to fetch.
     */
    where: HorseGenderWhereUniqueInput
  }

  /**
   * HorseGender findFirst
   */
  export type HorseGenderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseGender
     */
    select?: HorseGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseGender
     */
    omit?: HorseGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseGenderInclude<ExtArgs> | null
    /**
     * Filter, which HorseGender to fetch.
     */
    where?: HorseGenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseGenders to fetch.
     */
    orderBy?: HorseGenderOrderByWithRelationInput | HorseGenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorseGenders.
     */
    cursor?: HorseGenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseGenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseGenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorseGenders.
     */
    distinct?: HorseGenderScalarFieldEnum | HorseGenderScalarFieldEnum[]
  }

  /**
   * HorseGender findFirstOrThrow
   */
  export type HorseGenderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseGender
     */
    select?: HorseGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseGender
     */
    omit?: HorseGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseGenderInclude<ExtArgs> | null
    /**
     * Filter, which HorseGender to fetch.
     */
    where?: HorseGenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseGenders to fetch.
     */
    orderBy?: HorseGenderOrderByWithRelationInput | HorseGenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorseGenders.
     */
    cursor?: HorseGenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseGenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseGenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorseGenders.
     */
    distinct?: HorseGenderScalarFieldEnum | HorseGenderScalarFieldEnum[]
  }

  /**
   * HorseGender findMany
   */
  export type HorseGenderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseGender
     */
    select?: HorseGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseGender
     */
    omit?: HorseGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseGenderInclude<ExtArgs> | null
    /**
     * Filter, which HorseGenders to fetch.
     */
    where?: HorseGenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseGenders to fetch.
     */
    orderBy?: HorseGenderOrderByWithRelationInput | HorseGenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HorseGenders.
     */
    cursor?: HorseGenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseGenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseGenders.
     */
    skip?: number
    distinct?: HorseGenderScalarFieldEnum | HorseGenderScalarFieldEnum[]
  }

  /**
   * HorseGender create
   */
  export type HorseGenderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseGender
     */
    select?: HorseGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseGender
     */
    omit?: HorseGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseGenderInclude<ExtArgs> | null
    /**
     * The data needed to create a HorseGender.
     */
    data: XOR<HorseGenderCreateInput, HorseGenderUncheckedCreateInput>
  }

  /**
   * HorseGender createMany
   */
  export type HorseGenderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HorseGenders.
     */
    data: HorseGenderCreateManyInput | HorseGenderCreateManyInput[]
  }

  /**
   * HorseGender createManyAndReturn
   */
  export type HorseGenderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseGender
     */
    select?: HorseGenderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorseGender
     */
    omit?: HorseGenderOmit<ExtArgs> | null
    /**
     * The data used to create many HorseGenders.
     */
    data: HorseGenderCreateManyInput | HorseGenderCreateManyInput[]
  }

  /**
   * HorseGender update
   */
  export type HorseGenderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseGender
     */
    select?: HorseGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseGender
     */
    omit?: HorseGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseGenderInclude<ExtArgs> | null
    /**
     * The data needed to update a HorseGender.
     */
    data: XOR<HorseGenderUpdateInput, HorseGenderUncheckedUpdateInput>
    /**
     * Choose, which HorseGender to update.
     */
    where: HorseGenderWhereUniqueInput
  }

  /**
   * HorseGender updateMany
   */
  export type HorseGenderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HorseGenders.
     */
    data: XOR<HorseGenderUpdateManyMutationInput, HorseGenderUncheckedUpdateManyInput>
    /**
     * Filter which HorseGenders to update
     */
    where?: HorseGenderWhereInput
    /**
     * Limit how many HorseGenders to update.
     */
    limit?: number
  }

  /**
   * HorseGender updateManyAndReturn
   */
  export type HorseGenderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseGender
     */
    select?: HorseGenderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorseGender
     */
    omit?: HorseGenderOmit<ExtArgs> | null
    /**
     * The data used to update HorseGenders.
     */
    data: XOR<HorseGenderUpdateManyMutationInput, HorseGenderUncheckedUpdateManyInput>
    /**
     * Filter which HorseGenders to update
     */
    where?: HorseGenderWhereInput
    /**
     * Limit how many HorseGenders to update.
     */
    limit?: number
  }

  /**
   * HorseGender upsert
   */
  export type HorseGenderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseGender
     */
    select?: HorseGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseGender
     */
    omit?: HorseGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseGenderInclude<ExtArgs> | null
    /**
     * The filter to search for the HorseGender to update in case it exists.
     */
    where: HorseGenderWhereUniqueInput
    /**
     * In case the HorseGender found by the `where` argument doesn't exist, create a new HorseGender with this data.
     */
    create: XOR<HorseGenderCreateInput, HorseGenderUncheckedCreateInput>
    /**
     * In case the HorseGender was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorseGenderUpdateInput, HorseGenderUncheckedUpdateInput>
  }

  /**
   * HorseGender delete
   */
  export type HorseGenderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseGender
     */
    select?: HorseGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseGender
     */
    omit?: HorseGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseGenderInclude<ExtArgs> | null
    /**
     * Filter which HorseGender to delete.
     */
    where: HorseGenderWhereUniqueInput
  }

  /**
   * HorseGender deleteMany
   */
  export type HorseGenderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorseGenders to delete
     */
    where?: HorseGenderWhereInput
    /**
     * Limit how many HorseGenders to delete.
     */
    limit?: number
  }

  /**
   * HorseGender.horses
   */
  export type HorseGender$horsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseInclude<ExtArgs> | null
    where?: HorseWhereInput
    orderBy?: HorseOrderByWithRelationInput | HorseOrderByWithRelationInput[]
    cursor?: HorseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorseScalarFieldEnum | HorseScalarFieldEnum[]
  }

  /**
   * HorseGender without action
   */
  export type HorseGenderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseGender
     */
    select?: HorseGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseGender
     */
    omit?: HorseGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseGenderInclude<ExtArgs> | null
  }


  /**
   * Model HorseImage
   */

  export type AggregateHorseImage = {
    _count: HorseImageCountAggregateOutputType | null
    _min: HorseImageMinAggregateOutputType | null
    _max: HorseImageMaxAggregateOutputType | null
  }

  export type HorseImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    horseId: string | null
  }

  export type HorseImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    horseId: string | null
  }

  export type HorseImageCountAggregateOutputType = {
    id: number
    url: number
    createdAt: number
    updatedAt: number
    horseId: number
    _all: number
  }


  export type HorseImageMinAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    horseId?: true
  }

  export type HorseImageMaxAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    horseId?: true
  }

  export type HorseImageCountAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    horseId?: true
    _all?: true
  }

  export type HorseImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorseImage to aggregate.
     */
    where?: HorseImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseImages to fetch.
     */
    orderBy?: HorseImageOrderByWithRelationInput | HorseImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorseImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HorseImages
    **/
    _count?: true | HorseImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorseImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorseImageMaxAggregateInputType
  }

  export type GetHorseImageAggregateType<T extends HorseImageAggregateArgs> = {
        [P in keyof T & keyof AggregateHorseImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorseImage[P]>
      : GetScalarType<T[P], AggregateHorseImage[P]>
  }




  export type HorseImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorseImageWhereInput
    orderBy?: HorseImageOrderByWithAggregationInput | HorseImageOrderByWithAggregationInput[]
    by: HorseImageScalarFieldEnum[] | HorseImageScalarFieldEnum
    having?: HorseImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorseImageCountAggregateInputType | true
    _min?: HorseImageMinAggregateInputType
    _max?: HorseImageMaxAggregateInputType
  }

  export type HorseImageGroupByOutputType = {
    id: string
    url: string
    createdAt: Date
    updatedAt: Date
    horseId: string
    _count: HorseImageCountAggregateOutputType | null
    _min: HorseImageMinAggregateOutputType | null
    _max: HorseImageMaxAggregateOutputType | null
  }

  type GetHorseImageGroupByPayload<T extends HorseImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorseImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorseImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorseImageGroupByOutputType[P]>
            : GetScalarType<T[P], HorseImageGroupByOutputType[P]>
        }
      >
    >


  export type HorseImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    horseId?: boolean
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horseImage"]>

  export type HorseImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    horseId?: boolean
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horseImage"]>

  export type HorseImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    horseId?: boolean
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horseImage"]>

  export type HorseImageSelectScalar = {
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    horseId?: boolean
  }

  export type HorseImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "createdAt" | "updatedAt" | "horseId", ExtArgs["result"]["horseImage"]>
  export type HorseImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }
  export type HorseImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }
  export type HorseImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }

  export type $HorseImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HorseImage"
    objects: {
      horse: Prisma.$HorsePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      createdAt: Date
      updatedAt: Date
      horseId: string
    }, ExtArgs["result"]["horseImage"]>
    composites: {}
  }

  type HorseImageGetPayload<S extends boolean | null | undefined | HorseImageDefaultArgs> = $Result.GetResult<Prisma.$HorseImagePayload, S>

  type HorseImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorseImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorseImageCountAggregateInputType | true
    }

  export interface HorseImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HorseImage'], meta: { name: 'HorseImage' } }
    /**
     * Find zero or one HorseImage that matches the filter.
     * @param {HorseImageFindUniqueArgs} args - Arguments to find a HorseImage
     * @example
     * // Get one HorseImage
     * const horseImage = await prisma.horseImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorseImageFindUniqueArgs>(args: SelectSubset<T, HorseImageFindUniqueArgs<ExtArgs>>): Prisma__HorseImageClient<$Result.GetResult<Prisma.$HorseImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HorseImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorseImageFindUniqueOrThrowArgs} args - Arguments to find a HorseImage
     * @example
     * // Get one HorseImage
     * const horseImage = await prisma.horseImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorseImageFindUniqueOrThrowArgs>(args: SelectSubset<T, HorseImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorseImageClient<$Result.GetResult<Prisma.$HorseImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorseImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseImageFindFirstArgs} args - Arguments to find a HorseImage
     * @example
     * // Get one HorseImage
     * const horseImage = await prisma.horseImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorseImageFindFirstArgs>(args?: SelectSubset<T, HorseImageFindFirstArgs<ExtArgs>>): Prisma__HorseImageClient<$Result.GetResult<Prisma.$HorseImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorseImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseImageFindFirstOrThrowArgs} args - Arguments to find a HorseImage
     * @example
     * // Get one HorseImage
     * const horseImage = await prisma.horseImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorseImageFindFirstOrThrowArgs>(args?: SelectSubset<T, HorseImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorseImageClient<$Result.GetResult<Prisma.$HorseImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HorseImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HorseImages
     * const horseImages = await prisma.horseImage.findMany()
     * 
     * // Get first 10 HorseImages
     * const horseImages = await prisma.horseImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horseImageWithIdOnly = await prisma.horseImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorseImageFindManyArgs>(args?: SelectSubset<T, HorseImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HorseImage.
     * @param {HorseImageCreateArgs} args - Arguments to create a HorseImage.
     * @example
     * // Create one HorseImage
     * const HorseImage = await prisma.horseImage.create({
     *   data: {
     *     // ... data to create a HorseImage
     *   }
     * })
     * 
     */
    create<T extends HorseImageCreateArgs>(args: SelectSubset<T, HorseImageCreateArgs<ExtArgs>>): Prisma__HorseImageClient<$Result.GetResult<Prisma.$HorseImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HorseImages.
     * @param {HorseImageCreateManyArgs} args - Arguments to create many HorseImages.
     * @example
     * // Create many HorseImages
     * const horseImage = await prisma.horseImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorseImageCreateManyArgs>(args?: SelectSubset<T, HorseImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HorseImages and returns the data saved in the database.
     * @param {HorseImageCreateManyAndReturnArgs} args - Arguments to create many HorseImages.
     * @example
     * // Create many HorseImages
     * const horseImage = await prisma.horseImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HorseImages and only return the `id`
     * const horseImageWithIdOnly = await prisma.horseImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HorseImageCreateManyAndReturnArgs>(args?: SelectSubset<T, HorseImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HorseImage.
     * @param {HorseImageDeleteArgs} args - Arguments to delete one HorseImage.
     * @example
     * // Delete one HorseImage
     * const HorseImage = await prisma.horseImage.delete({
     *   where: {
     *     // ... filter to delete one HorseImage
     *   }
     * })
     * 
     */
    delete<T extends HorseImageDeleteArgs>(args: SelectSubset<T, HorseImageDeleteArgs<ExtArgs>>): Prisma__HorseImageClient<$Result.GetResult<Prisma.$HorseImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HorseImage.
     * @param {HorseImageUpdateArgs} args - Arguments to update one HorseImage.
     * @example
     * // Update one HorseImage
     * const horseImage = await prisma.horseImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorseImageUpdateArgs>(args: SelectSubset<T, HorseImageUpdateArgs<ExtArgs>>): Prisma__HorseImageClient<$Result.GetResult<Prisma.$HorseImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HorseImages.
     * @param {HorseImageDeleteManyArgs} args - Arguments to filter HorseImages to delete.
     * @example
     * // Delete a few HorseImages
     * const { count } = await prisma.horseImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorseImageDeleteManyArgs>(args?: SelectSubset<T, HorseImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorseImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HorseImages
     * const horseImage = await prisma.horseImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorseImageUpdateManyArgs>(args: SelectSubset<T, HorseImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorseImages and returns the data updated in the database.
     * @param {HorseImageUpdateManyAndReturnArgs} args - Arguments to update many HorseImages.
     * @example
     * // Update many HorseImages
     * const horseImage = await prisma.horseImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HorseImages and only return the `id`
     * const horseImageWithIdOnly = await prisma.horseImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HorseImageUpdateManyAndReturnArgs>(args: SelectSubset<T, HorseImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HorseImage.
     * @param {HorseImageUpsertArgs} args - Arguments to update or create a HorseImage.
     * @example
     * // Update or create a HorseImage
     * const horseImage = await prisma.horseImage.upsert({
     *   create: {
     *     // ... data to create a HorseImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HorseImage we want to update
     *   }
     * })
     */
    upsert<T extends HorseImageUpsertArgs>(args: SelectSubset<T, HorseImageUpsertArgs<ExtArgs>>): Prisma__HorseImageClient<$Result.GetResult<Prisma.$HorseImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HorseImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseImageCountArgs} args - Arguments to filter HorseImages to count.
     * @example
     * // Count the number of HorseImages
     * const count = await prisma.horseImage.count({
     *   where: {
     *     // ... the filter for the HorseImages we want to count
     *   }
     * })
    **/
    count<T extends HorseImageCountArgs>(
      args?: Subset<T, HorseImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorseImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HorseImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HorseImageAggregateArgs>(args: Subset<T, HorseImageAggregateArgs>): Prisma.PrismaPromise<GetHorseImageAggregateType<T>>

    /**
     * Group by HorseImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HorseImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorseImageGroupByArgs['orderBy'] }
        : { orderBy?: HorseImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HorseImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorseImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HorseImage model
   */
  readonly fields: HorseImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HorseImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorseImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    horse<T extends HorseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HorseDefaultArgs<ExtArgs>>): Prisma__HorseClient<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HorseImage model
   */
  interface HorseImageFieldRefs {
    readonly id: FieldRef<"HorseImage", 'String'>
    readonly url: FieldRef<"HorseImage", 'String'>
    readonly createdAt: FieldRef<"HorseImage", 'DateTime'>
    readonly updatedAt: FieldRef<"HorseImage", 'DateTime'>
    readonly horseId: FieldRef<"HorseImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HorseImage findUnique
   */
  export type HorseImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseImage
     */
    select?: HorseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseImage
     */
    omit?: HorseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseImageInclude<ExtArgs> | null
    /**
     * Filter, which HorseImage to fetch.
     */
    where: HorseImageWhereUniqueInput
  }

  /**
   * HorseImage findUniqueOrThrow
   */
  export type HorseImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseImage
     */
    select?: HorseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseImage
     */
    omit?: HorseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseImageInclude<ExtArgs> | null
    /**
     * Filter, which HorseImage to fetch.
     */
    where: HorseImageWhereUniqueInput
  }

  /**
   * HorseImage findFirst
   */
  export type HorseImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseImage
     */
    select?: HorseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseImage
     */
    omit?: HorseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseImageInclude<ExtArgs> | null
    /**
     * Filter, which HorseImage to fetch.
     */
    where?: HorseImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseImages to fetch.
     */
    orderBy?: HorseImageOrderByWithRelationInput | HorseImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorseImages.
     */
    cursor?: HorseImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorseImages.
     */
    distinct?: HorseImageScalarFieldEnum | HorseImageScalarFieldEnum[]
  }

  /**
   * HorseImage findFirstOrThrow
   */
  export type HorseImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseImage
     */
    select?: HorseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseImage
     */
    omit?: HorseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseImageInclude<ExtArgs> | null
    /**
     * Filter, which HorseImage to fetch.
     */
    where?: HorseImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseImages to fetch.
     */
    orderBy?: HorseImageOrderByWithRelationInput | HorseImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorseImages.
     */
    cursor?: HorseImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorseImages.
     */
    distinct?: HorseImageScalarFieldEnum | HorseImageScalarFieldEnum[]
  }

  /**
   * HorseImage findMany
   */
  export type HorseImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseImage
     */
    select?: HorseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseImage
     */
    omit?: HorseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseImageInclude<ExtArgs> | null
    /**
     * Filter, which HorseImages to fetch.
     */
    where?: HorseImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseImages to fetch.
     */
    orderBy?: HorseImageOrderByWithRelationInput | HorseImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HorseImages.
     */
    cursor?: HorseImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseImages.
     */
    skip?: number
    distinct?: HorseImageScalarFieldEnum | HorseImageScalarFieldEnum[]
  }

  /**
   * HorseImage create
   */
  export type HorseImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseImage
     */
    select?: HorseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseImage
     */
    omit?: HorseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseImageInclude<ExtArgs> | null
    /**
     * The data needed to create a HorseImage.
     */
    data: XOR<HorseImageCreateInput, HorseImageUncheckedCreateInput>
  }

  /**
   * HorseImage createMany
   */
  export type HorseImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HorseImages.
     */
    data: HorseImageCreateManyInput | HorseImageCreateManyInput[]
  }

  /**
   * HorseImage createManyAndReturn
   */
  export type HorseImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseImage
     */
    select?: HorseImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorseImage
     */
    omit?: HorseImageOmit<ExtArgs> | null
    /**
     * The data used to create many HorseImages.
     */
    data: HorseImageCreateManyInput | HorseImageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HorseImage update
   */
  export type HorseImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseImage
     */
    select?: HorseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseImage
     */
    omit?: HorseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseImageInclude<ExtArgs> | null
    /**
     * The data needed to update a HorseImage.
     */
    data: XOR<HorseImageUpdateInput, HorseImageUncheckedUpdateInput>
    /**
     * Choose, which HorseImage to update.
     */
    where: HorseImageWhereUniqueInput
  }

  /**
   * HorseImage updateMany
   */
  export type HorseImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HorseImages.
     */
    data: XOR<HorseImageUpdateManyMutationInput, HorseImageUncheckedUpdateManyInput>
    /**
     * Filter which HorseImages to update
     */
    where?: HorseImageWhereInput
    /**
     * Limit how many HorseImages to update.
     */
    limit?: number
  }

  /**
   * HorseImage updateManyAndReturn
   */
  export type HorseImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseImage
     */
    select?: HorseImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorseImage
     */
    omit?: HorseImageOmit<ExtArgs> | null
    /**
     * The data used to update HorseImages.
     */
    data: XOR<HorseImageUpdateManyMutationInput, HorseImageUncheckedUpdateManyInput>
    /**
     * Filter which HorseImages to update
     */
    where?: HorseImageWhereInput
    /**
     * Limit how many HorseImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HorseImage upsert
   */
  export type HorseImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseImage
     */
    select?: HorseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseImage
     */
    omit?: HorseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseImageInclude<ExtArgs> | null
    /**
     * The filter to search for the HorseImage to update in case it exists.
     */
    where: HorseImageWhereUniqueInput
    /**
     * In case the HorseImage found by the `where` argument doesn't exist, create a new HorseImage with this data.
     */
    create: XOR<HorseImageCreateInput, HorseImageUncheckedCreateInput>
    /**
     * In case the HorseImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorseImageUpdateInput, HorseImageUncheckedUpdateInput>
  }

  /**
   * HorseImage delete
   */
  export type HorseImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseImage
     */
    select?: HorseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseImage
     */
    omit?: HorseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseImageInclude<ExtArgs> | null
    /**
     * Filter which HorseImage to delete.
     */
    where: HorseImageWhereUniqueInput
  }

  /**
   * HorseImage deleteMany
   */
  export type HorseImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorseImages to delete
     */
    where?: HorseImageWhereInput
    /**
     * Limit how many HorseImages to delete.
     */
    limit?: number
  }

  /**
   * HorseImage without action
   */
  export type HorseImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseImage
     */
    select?: HorseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseImage
     */
    omit?: HorseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseImageInclude<ExtArgs> | null
  }


  /**
   * Model HorseDiscipline
   */

  export type AggregateHorseDiscipline = {
    _count: HorseDisciplineCountAggregateOutputType | null
    _min: HorseDisciplineMinAggregateOutputType | null
    _max: HorseDisciplineMaxAggregateOutputType | null
  }

  export type HorseDisciplineMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorseDisciplineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorseDisciplineCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HorseDisciplineMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorseDisciplineMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorseDisciplineCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HorseDisciplineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorseDiscipline to aggregate.
     */
    where?: HorseDisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseDisciplines to fetch.
     */
    orderBy?: HorseDisciplineOrderByWithRelationInput | HorseDisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorseDisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseDisciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseDisciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HorseDisciplines
    **/
    _count?: true | HorseDisciplineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorseDisciplineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorseDisciplineMaxAggregateInputType
  }

  export type GetHorseDisciplineAggregateType<T extends HorseDisciplineAggregateArgs> = {
        [P in keyof T & keyof AggregateHorseDiscipline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorseDiscipline[P]>
      : GetScalarType<T[P], AggregateHorseDiscipline[P]>
  }




  export type HorseDisciplineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorseDisciplineWhereInput
    orderBy?: HorseDisciplineOrderByWithAggregationInput | HorseDisciplineOrderByWithAggregationInput[]
    by: HorseDisciplineScalarFieldEnum[] | HorseDisciplineScalarFieldEnum
    having?: HorseDisciplineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorseDisciplineCountAggregateInputType | true
    _min?: HorseDisciplineMinAggregateInputType
    _max?: HorseDisciplineMaxAggregateInputType
  }

  export type HorseDisciplineGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: HorseDisciplineCountAggregateOutputType | null
    _min: HorseDisciplineMinAggregateOutputType | null
    _max: HorseDisciplineMaxAggregateOutputType | null
  }

  type GetHorseDisciplineGroupByPayload<T extends HorseDisciplineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorseDisciplineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorseDisciplineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorseDisciplineGroupByOutputType[P]>
            : GetScalarType<T[P], HorseDisciplineGroupByOutputType[P]>
        }
      >
    >


  export type HorseDisciplineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    horses?: boolean | HorseDiscipline$horsesArgs<ExtArgs>
    _count?: boolean | HorseDisciplineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horseDiscipline"]>

  export type HorseDisciplineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["horseDiscipline"]>

  export type HorseDisciplineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["horseDiscipline"]>

  export type HorseDisciplineSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HorseDisciplineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["horseDiscipline"]>
  export type HorseDisciplineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horses?: boolean | HorseDiscipline$horsesArgs<ExtArgs>
    _count?: boolean | HorseDisciplineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HorseDisciplineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HorseDisciplineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HorseDisciplinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HorseDiscipline"
    objects: {
      horses: Prisma.$HorsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["horseDiscipline"]>
    composites: {}
  }

  type HorseDisciplineGetPayload<S extends boolean | null | undefined | HorseDisciplineDefaultArgs> = $Result.GetResult<Prisma.$HorseDisciplinePayload, S>

  type HorseDisciplineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorseDisciplineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorseDisciplineCountAggregateInputType | true
    }

  export interface HorseDisciplineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HorseDiscipline'], meta: { name: 'HorseDiscipline' } }
    /**
     * Find zero or one HorseDiscipline that matches the filter.
     * @param {HorseDisciplineFindUniqueArgs} args - Arguments to find a HorseDiscipline
     * @example
     * // Get one HorseDiscipline
     * const horseDiscipline = await prisma.horseDiscipline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorseDisciplineFindUniqueArgs>(args: SelectSubset<T, HorseDisciplineFindUniqueArgs<ExtArgs>>): Prisma__HorseDisciplineClient<$Result.GetResult<Prisma.$HorseDisciplinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HorseDiscipline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorseDisciplineFindUniqueOrThrowArgs} args - Arguments to find a HorseDiscipline
     * @example
     * // Get one HorseDiscipline
     * const horseDiscipline = await prisma.horseDiscipline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorseDisciplineFindUniqueOrThrowArgs>(args: SelectSubset<T, HorseDisciplineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorseDisciplineClient<$Result.GetResult<Prisma.$HorseDisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorseDiscipline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseDisciplineFindFirstArgs} args - Arguments to find a HorseDiscipline
     * @example
     * // Get one HorseDiscipline
     * const horseDiscipline = await prisma.horseDiscipline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorseDisciplineFindFirstArgs>(args?: SelectSubset<T, HorseDisciplineFindFirstArgs<ExtArgs>>): Prisma__HorseDisciplineClient<$Result.GetResult<Prisma.$HorseDisciplinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorseDiscipline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseDisciplineFindFirstOrThrowArgs} args - Arguments to find a HorseDiscipline
     * @example
     * // Get one HorseDiscipline
     * const horseDiscipline = await prisma.horseDiscipline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorseDisciplineFindFirstOrThrowArgs>(args?: SelectSubset<T, HorseDisciplineFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorseDisciplineClient<$Result.GetResult<Prisma.$HorseDisciplinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HorseDisciplines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseDisciplineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HorseDisciplines
     * const horseDisciplines = await prisma.horseDiscipline.findMany()
     * 
     * // Get first 10 HorseDisciplines
     * const horseDisciplines = await prisma.horseDiscipline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horseDisciplineWithIdOnly = await prisma.horseDiscipline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorseDisciplineFindManyArgs>(args?: SelectSubset<T, HorseDisciplineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseDisciplinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HorseDiscipline.
     * @param {HorseDisciplineCreateArgs} args - Arguments to create a HorseDiscipline.
     * @example
     * // Create one HorseDiscipline
     * const HorseDiscipline = await prisma.horseDiscipline.create({
     *   data: {
     *     // ... data to create a HorseDiscipline
     *   }
     * })
     * 
     */
    create<T extends HorseDisciplineCreateArgs>(args: SelectSubset<T, HorseDisciplineCreateArgs<ExtArgs>>): Prisma__HorseDisciplineClient<$Result.GetResult<Prisma.$HorseDisciplinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HorseDisciplines.
     * @param {HorseDisciplineCreateManyArgs} args - Arguments to create many HorseDisciplines.
     * @example
     * // Create many HorseDisciplines
     * const horseDiscipline = await prisma.horseDiscipline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorseDisciplineCreateManyArgs>(args?: SelectSubset<T, HorseDisciplineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HorseDisciplines and returns the data saved in the database.
     * @param {HorseDisciplineCreateManyAndReturnArgs} args - Arguments to create many HorseDisciplines.
     * @example
     * // Create many HorseDisciplines
     * const horseDiscipline = await prisma.horseDiscipline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HorseDisciplines and only return the `id`
     * const horseDisciplineWithIdOnly = await prisma.horseDiscipline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HorseDisciplineCreateManyAndReturnArgs>(args?: SelectSubset<T, HorseDisciplineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseDisciplinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HorseDiscipline.
     * @param {HorseDisciplineDeleteArgs} args - Arguments to delete one HorseDiscipline.
     * @example
     * // Delete one HorseDiscipline
     * const HorseDiscipline = await prisma.horseDiscipline.delete({
     *   where: {
     *     // ... filter to delete one HorseDiscipline
     *   }
     * })
     * 
     */
    delete<T extends HorseDisciplineDeleteArgs>(args: SelectSubset<T, HorseDisciplineDeleteArgs<ExtArgs>>): Prisma__HorseDisciplineClient<$Result.GetResult<Prisma.$HorseDisciplinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HorseDiscipline.
     * @param {HorseDisciplineUpdateArgs} args - Arguments to update one HorseDiscipline.
     * @example
     * // Update one HorseDiscipline
     * const horseDiscipline = await prisma.horseDiscipline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorseDisciplineUpdateArgs>(args: SelectSubset<T, HorseDisciplineUpdateArgs<ExtArgs>>): Prisma__HorseDisciplineClient<$Result.GetResult<Prisma.$HorseDisciplinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HorseDisciplines.
     * @param {HorseDisciplineDeleteManyArgs} args - Arguments to filter HorseDisciplines to delete.
     * @example
     * // Delete a few HorseDisciplines
     * const { count } = await prisma.horseDiscipline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorseDisciplineDeleteManyArgs>(args?: SelectSubset<T, HorseDisciplineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorseDisciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseDisciplineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HorseDisciplines
     * const horseDiscipline = await prisma.horseDiscipline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorseDisciplineUpdateManyArgs>(args: SelectSubset<T, HorseDisciplineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorseDisciplines and returns the data updated in the database.
     * @param {HorseDisciplineUpdateManyAndReturnArgs} args - Arguments to update many HorseDisciplines.
     * @example
     * // Update many HorseDisciplines
     * const horseDiscipline = await prisma.horseDiscipline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HorseDisciplines and only return the `id`
     * const horseDisciplineWithIdOnly = await prisma.horseDiscipline.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HorseDisciplineUpdateManyAndReturnArgs>(args: SelectSubset<T, HorseDisciplineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseDisciplinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HorseDiscipline.
     * @param {HorseDisciplineUpsertArgs} args - Arguments to update or create a HorseDiscipline.
     * @example
     * // Update or create a HorseDiscipline
     * const horseDiscipline = await prisma.horseDiscipline.upsert({
     *   create: {
     *     // ... data to create a HorseDiscipline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HorseDiscipline we want to update
     *   }
     * })
     */
    upsert<T extends HorseDisciplineUpsertArgs>(args: SelectSubset<T, HorseDisciplineUpsertArgs<ExtArgs>>): Prisma__HorseDisciplineClient<$Result.GetResult<Prisma.$HorseDisciplinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HorseDisciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseDisciplineCountArgs} args - Arguments to filter HorseDisciplines to count.
     * @example
     * // Count the number of HorseDisciplines
     * const count = await prisma.horseDiscipline.count({
     *   where: {
     *     // ... the filter for the HorseDisciplines we want to count
     *   }
     * })
    **/
    count<T extends HorseDisciplineCountArgs>(
      args?: Subset<T, HorseDisciplineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorseDisciplineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HorseDiscipline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseDisciplineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HorseDisciplineAggregateArgs>(args: Subset<T, HorseDisciplineAggregateArgs>): Prisma.PrismaPromise<GetHorseDisciplineAggregateType<T>>

    /**
     * Group by HorseDiscipline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseDisciplineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HorseDisciplineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorseDisciplineGroupByArgs['orderBy'] }
        : { orderBy?: HorseDisciplineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HorseDisciplineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorseDisciplineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HorseDiscipline model
   */
  readonly fields: HorseDisciplineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HorseDiscipline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorseDisciplineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    horses<T extends HorseDiscipline$horsesArgs<ExtArgs> = {}>(args?: Subset<T, HorseDiscipline$horsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HorseDiscipline model
   */
  interface HorseDisciplineFieldRefs {
    readonly id: FieldRef<"HorseDiscipline", 'String'>
    readonly name: FieldRef<"HorseDiscipline", 'String'>
    readonly createdAt: FieldRef<"HorseDiscipline", 'DateTime'>
    readonly updatedAt: FieldRef<"HorseDiscipline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HorseDiscipline findUnique
   */
  export type HorseDisciplineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseDiscipline
     */
    select?: HorseDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseDiscipline
     */
    omit?: HorseDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseDisciplineInclude<ExtArgs> | null
    /**
     * Filter, which HorseDiscipline to fetch.
     */
    where: HorseDisciplineWhereUniqueInput
  }

  /**
   * HorseDiscipline findUniqueOrThrow
   */
  export type HorseDisciplineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseDiscipline
     */
    select?: HorseDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseDiscipline
     */
    omit?: HorseDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseDisciplineInclude<ExtArgs> | null
    /**
     * Filter, which HorseDiscipline to fetch.
     */
    where: HorseDisciplineWhereUniqueInput
  }

  /**
   * HorseDiscipline findFirst
   */
  export type HorseDisciplineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseDiscipline
     */
    select?: HorseDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseDiscipline
     */
    omit?: HorseDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseDisciplineInclude<ExtArgs> | null
    /**
     * Filter, which HorseDiscipline to fetch.
     */
    where?: HorseDisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseDisciplines to fetch.
     */
    orderBy?: HorseDisciplineOrderByWithRelationInput | HorseDisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorseDisciplines.
     */
    cursor?: HorseDisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseDisciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseDisciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorseDisciplines.
     */
    distinct?: HorseDisciplineScalarFieldEnum | HorseDisciplineScalarFieldEnum[]
  }

  /**
   * HorseDiscipline findFirstOrThrow
   */
  export type HorseDisciplineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseDiscipline
     */
    select?: HorseDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseDiscipline
     */
    omit?: HorseDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseDisciplineInclude<ExtArgs> | null
    /**
     * Filter, which HorseDiscipline to fetch.
     */
    where?: HorseDisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseDisciplines to fetch.
     */
    orderBy?: HorseDisciplineOrderByWithRelationInput | HorseDisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorseDisciplines.
     */
    cursor?: HorseDisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseDisciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseDisciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorseDisciplines.
     */
    distinct?: HorseDisciplineScalarFieldEnum | HorseDisciplineScalarFieldEnum[]
  }

  /**
   * HorseDiscipline findMany
   */
  export type HorseDisciplineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseDiscipline
     */
    select?: HorseDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseDiscipline
     */
    omit?: HorseDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseDisciplineInclude<ExtArgs> | null
    /**
     * Filter, which HorseDisciplines to fetch.
     */
    where?: HorseDisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseDisciplines to fetch.
     */
    orderBy?: HorseDisciplineOrderByWithRelationInput | HorseDisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HorseDisciplines.
     */
    cursor?: HorseDisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseDisciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseDisciplines.
     */
    skip?: number
    distinct?: HorseDisciplineScalarFieldEnum | HorseDisciplineScalarFieldEnum[]
  }

  /**
   * HorseDiscipline create
   */
  export type HorseDisciplineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseDiscipline
     */
    select?: HorseDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseDiscipline
     */
    omit?: HorseDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseDisciplineInclude<ExtArgs> | null
    /**
     * The data needed to create a HorseDiscipline.
     */
    data: XOR<HorseDisciplineCreateInput, HorseDisciplineUncheckedCreateInput>
  }

  /**
   * HorseDiscipline createMany
   */
  export type HorseDisciplineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HorseDisciplines.
     */
    data: HorseDisciplineCreateManyInput | HorseDisciplineCreateManyInput[]
  }

  /**
   * HorseDiscipline createManyAndReturn
   */
  export type HorseDisciplineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseDiscipline
     */
    select?: HorseDisciplineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorseDiscipline
     */
    omit?: HorseDisciplineOmit<ExtArgs> | null
    /**
     * The data used to create many HorseDisciplines.
     */
    data: HorseDisciplineCreateManyInput | HorseDisciplineCreateManyInput[]
  }

  /**
   * HorseDiscipline update
   */
  export type HorseDisciplineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseDiscipline
     */
    select?: HorseDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseDiscipline
     */
    omit?: HorseDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseDisciplineInclude<ExtArgs> | null
    /**
     * The data needed to update a HorseDiscipline.
     */
    data: XOR<HorseDisciplineUpdateInput, HorseDisciplineUncheckedUpdateInput>
    /**
     * Choose, which HorseDiscipline to update.
     */
    where: HorseDisciplineWhereUniqueInput
  }

  /**
   * HorseDiscipline updateMany
   */
  export type HorseDisciplineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HorseDisciplines.
     */
    data: XOR<HorseDisciplineUpdateManyMutationInput, HorseDisciplineUncheckedUpdateManyInput>
    /**
     * Filter which HorseDisciplines to update
     */
    where?: HorseDisciplineWhereInput
    /**
     * Limit how many HorseDisciplines to update.
     */
    limit?: number
  }

  /**
   * HorseDiscipline updateManyAndReturn
   */
  export type HorseDisciplineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseDiscipline
     */
    select?: HorseDisciplineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorseDiscipline
     */
    omit?: HorseDisciplineOmit<ExtArgs> | null
    /**
     * The data used to update HorseDisciplines.
     */
    data: XOR<HorseDisciplineUpdateManyMutationInput, HorseDisciplineUncheckedUpdateManyInput>
    /**
     * Filter which HorseDisciplines to update
     */
    where?: HorseDisciplineWhereInput
    /**
     * Limit how many HorseDisciplines to update.
     */
    limit?: number
  }

  /**
   * HorseDiscipline upsert
   */
  export type HorseDisciplineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseDiscipline
     */
    select?: HorseDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseDiscipline
     */
    omit?: HorseDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseDisciplineInclude<ExtArgs> | null
    /**
     * The filter to search for the HorseDiscipline to update in case it exists.
     */
    where: HorseDisciplineWhereUniqueInput
    /**
     * In case the HorseDiscipline found by the `where` argument doesn't exist, create a new HorseDiscipline with this data.
     */
    create: XOR<HorseDisciplineCreateInput, HorseDisciplineUncheckedCreateInput>
    /**
     * In case the HorseDiscipline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorseDisciplineUpdateInput, HorseDisciplineUncheckedUpdateInput>
  }

  /**
   * HorseDiscipline delete
   */
  export type HorseDisciplineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseDiscipline
     */
    select?: HorseDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseDiscipline
     */
    omit?: HorseDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseDisciplineInclude<ExtArgs> | null
    /**
     * Filter which HorseDiscipline to delete.
     */
    where: HorseDisciplineWhereUniqueInput
  }

  /**
   * HorseDiscipline deleteMany
   */
  export type HorseDisciplineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorseDisciplines to delete
     */
    where?: HorseDisciplineWhereInput
    /**
     * Limit how many HorseDisciplines to delete.
     */
    limit?: number
  }

  /**
   * HorseDiscipline.horses
   */
  export type HorseDiscipline$horsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseInclude<ExtArgs> | null
    where?: HorseWhereInput
    orderBy?: HorseOrderByWithRelationInput | HorseOrderByWithRelationInput[]
    cursor?: HorseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorseScalarFieldEnum | HorseScalarFieldEnum[]
  }

  /**
   * HorseDiscipline without action
   */
  export type HorseDisciplineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseDiscipline
     */
    select?: HorseDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseDiscipline
     */
    omit?: HorseDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseDisciplineInclude<ExtArgs> | null
  }


  /**
   * Model HorseVetReport
   */

  export type AggregateHorseVetReport = {
    _count: HorseVetReportCountAggregateOutputType | null
    _min: HorseVetReportMinAggregateOutputType | null
    _max: HorseVetReportMaxAggregateOutputType | null
  }

  export type HorseVetReportMinAggregateOutputType = {
    id: string | null
    horseId: string | null
    reportUrl: string | null
    public: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorseVetReportMaxAggregateOutputType = {
    id: string | null
    horseId: string | null
    reportUrl: string | null
    public: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorseVetReportCountAggregateOutputType = {
    id: number
    horseId: number
    reportUrl: number
    public: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HorseVetReportMinAggregateInputType = {
    id?: true
    horseId?: true
    reportUrl?: true
    public?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorseVetReportMaxAggregateInputType = {
    id?: true
    horseId?: true
    reportUrl?: true
    public?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorseVetReportCountAggregateInputType = {
    id?: true
    horseId?: true
    reportUrl?: true
    public?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HorseVetReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorseVetReport to aggregate.
     */
    where?: HorseVetReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseVetReports to fetch.
     */
    orderBy?: HorseVetReportOrderByWithRelationInput | HorseVetReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorseVetReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseVetReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseVetReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HorseVetReports
    **/
    _count?: true | HorseVetReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorseVetReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorseVetReportMaxAggregateInputType
  }

  export type GetHorseVetReportAggregateType<T extends HorseVetReportAggregateArgs> = {
        [P in keyof T & keyof AggregateHorseVetReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorseVetReport[P]>
      : GetScalarType<T[P], AggregateHorseVetReport[P]>
  }




  export type HorseVetReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorseVetReportWhereInput
    orderBy?: HorseVetReportOrderByWithAggregationInput | HorseVetReportOrderByWithAggregationInput[]
    by: HorseVetReportScalarFieldEnum[] | HorseVetReportScalarFieldEnum
    having?: HorseVetReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorseVetReportCountAggregateInputType | true
    _min?: HorseVetReportMinAggregateInputType
    _max?: HorseVetReportMaxAggregateInputType
  }

  export type HorseVetReportGroupByOutputType = {
    id: string
    horseId: string
    reportUrl: string
    public: boolean
    createdAt: Date
    updatedAt: Date
    _count: HorseVetReportCountAggregateOutputType | null
    _min: HorseVetReportMinAggregateOutputType | null
    _max: HorseVetReportMaxAggregateOutputType | null
  }

  type GetHorseVetReportGroupByPayload<T extends HorseVetReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorseVetReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorseVetReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorseVetReportGroupByOutputType[P]>
            : GetScalarType<T[P], HorseVetReportGroupByOutputType[P]>
        }
      >
    >


  export type HorseVetReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horseId?: boolean
    reportUrl?: boolean
    public?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horseVetReport"]>

  export type HorseVetReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horseId?: boolean
    reportUrl?: boolean
    public?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horseVetReport"]>

  export type HorseVetReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horseId?: boolean
    reportUrl?: boolean
    public?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horseVetReport"]>

  export type HorseVetReportSelectScalar = {
    id?: boolean
    horseId?: boolean
    reportUrl?: boolean
    public?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HorseVetReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "horseId" | "reportUrl" | "public" | "createdAt" | "updatedAt", ExtArgs["result"]["horseVetReport"]>
  export type HorseVetReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }
  export type HorseVetReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }
  export type HorseVetReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }

  export type $HorseVetReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HorseVetReport"
    objects: {
      horse: Prisma.$HorsePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      horseId: string
      reportUrl: string
      public: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["horseVetReport"]>
    composites: {}
  }

  type HorseVetReportGetPayload<S extends boolean | null | undefined | HorseVetReportDefaultArgs> = $Result.GetResult<Prisma.$HorseVetReportPayload, S>

  type HorseVetReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorseVetReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorseVetReportCountAggregateInputType | true
    }

  export interface HorseVetReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HorseVetReport'], meta: { name: 'HorseVetReport' } }
    /**
     * Find zero or one HorseVetReport that matches the filter.
     * @param {HorseVetReportFindUniqueArgs} args - Arguments to find a HorseVetReport
     * @example
     * // Get one HorseVetReport
     * const horseVetReport = await prisma.horseVetReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorseVetReportFindUniqueArgs>(args: SelectSubset<T, HorseVetReportFindUniqueArgs<ExtArgs>>): Prisma__HorseVetReportClient<$Result.GetResult<Prisma.$HorseVetReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HorseVetReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorseVetReportFindUniqueOrThrowArgs} args - Arguments to find a HorseVetReport
     * @example
     * // Get one HorseVetReport
     * const horseVetReport = await prisma.horseVetReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorseVetReportFindUniqueOrThrowArgs>(args: SelectSubset<T, HorseVetReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorseVetReportClient<$Result.GetResult<Prisma.$HorseVetReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorseVetReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseVetReportFindFirstArgs} args - Arguments to find a HorseVetReport
     * @example
     * // Get one HorseVetReport
     * const horseVetReport = await prisma.horseVetReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorseVetReportFindFirstArgs>(args?: SelectSubset<T, HorseVetReportFindFirstArgs<ExtArgs>>): Prisma__HorseVetReportClient<$Result.GetResult<Prisma.$HorseVetReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorseVetReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseVetReportFindFirstOrThrowArgs} args - Arguments to find a HorseVetReport
     * @example
     * // Get one HorseVetReport
     * const horseVetReport = await prisma.horseVetReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorseVetReportFindFirstOrThrowArgs>(args?: SelectSubset<T, HorseVetReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorseVetReportClient<$Result.GetResult<Prisma.$HorseVetReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HorseVetReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseVetReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HorseVetReports
     * const horseVetReports = await prisma.horseVetReport.findMany()
     * 
     * // Get first 10 HorseVetReports
     * const horseVetReports = await prisma.horseVetReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horseVetReportWithIdOnly = await prisma.horseVetReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorseVetReportFindManyArgs>(args?: SelectSubset<T, HorseVetReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseVetReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HorseVetReport.
     * @param {HorseVetReportCreateArgs} args - Arguments to create a HorseVetReport.
     * @example
     * // Create one HorseVetReport
     * const HorseVetReport = await prisma.horseVetReport.create({
     *   data: {
     *     // ... data to create a HorseVetReport
     *   }
     * })
     * 
     */
    create<T extends HorseVetReportCreateArgs>(args: SelectSubset<T, HorseVetReportCreateArgs<ExtArgs>>): Prisma__HorseVetReportClient<$Result.GetResult<Prisma.$HorseVetReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HorseVetReports.
     * @param {HorseVetReportCreateManyArgs} args - Arguments to create many HorseVetReports.
     * @example
     * // Create many HorseVetReports
     * const horseVetReport = await prisma.horseVetReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorseVetReportCreateManyArgs>(args?: SelectSubset<T, HorseVetReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HorseVetReports and returns the data saved in the database.
     * @param {HorseVetReportCreateManyAndReturnArgs} args - Arguments to create many HorseVetReports.
     * @example
     * // Create many HorseVetReports
     * const horseVetReport = await prisma.horseVetReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HorseVetReports and only return the `id`
     * const horseVetReportWithIdOnly = await prisma.horseVetReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HorseVetReportCreateManyAndReturnArgs>(args?: SelectSubset<T, HorseVetReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseVetReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HorseVetReport.
     * @param {HorseVetReportDeleteArgs} args - Arguments to delete one HorseVetReport.
     * @example
     * // Delete one HorseVetReport
     * const HorseVetReport = await prisma.horseVetReport.delete({
     *   where: {
     *     // ... filter to delete one HorseVetReport
     *   }
     * })
     * 
     */
    delete<T extends HorseVetReportDeleteArgs>(args: SelectSubset<T, HorseVetReportDeleteArgs<ExtArgs>>): Prisma__HorseVetReportClient<$Result.GetResult<Prisma.$HorseVetReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HorseVetReport.
     * @param {HorseVetReportUpdateArgs} args - Arguments to update one HorseVetReport.
     * @example
     * // Update one HorseVetReport
     * const horseVetReport = await prisma.horseVetReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorseVetReportUpdateArgs>(args: SelectSubset<T, HorseVetReportUpdateArgs<ExtArgs>>): Prisma__HorseVetReportClient<$Result.GetResult<Prisma.$HorseVetReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HorseVetReports.
     * @param {HorseVetReportDeleteManyArgs} args - Arguments to filter HorseVetReports to delete.
     * @example
     * // Delete a few HorseVetReports
     * const { count } = await prisma.horseVetReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorseVetReportDeleteManyArgs>(args?: SelectSubset<T, HorseVetReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorseVetReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseVetReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HorseVetReports
     * const horseVetReport = await prisma.horseVetReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorseVetReportUpdateManyArgs>(args: SelectSubset<T, HorseVetReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorseVetReports and returns the data updated in the database.
     * @param {HorseVetReportUpdateManyAndReturnArgs} args - Arguments to update many HorseVetReports.
     * @example
     * // Update many HorseVetReports
     * const horseVetReport = await prisma.horseVetReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HorseVetReports and only return the `id`
     * const horseVetReportWithIdOnly = await prisma.horseVetReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HorseVetReportUpdateManyAndReturnArgs>(args: SelectSubset<T, HorseVetReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseVetReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HorseVetReport.
     * @param {HorseVetReportUpsertArgs} args - Arguments to update or create a HorseVetReport.
     * @example
     * // Update or create a HorseVetReport
     * const horseVetReport = await prisma.horseVetReport.upsert({
     *   create: {
     *     // ... data to create a HorseVetReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HorseVetReport we want to update
     *   }
     * })
     */
    upsert<T extends HorseVetReportUpsertArgs>(args: SelectSubset<T, HorseVetReportUpsertArgs<ExtArgs>>): Prisma__HorseVetReportClient<$Result.GetResult<Prisma.$HorseVetReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HorseVetReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseVetReportCountArgs} args - Arguments to filter HorseVetReports to count.
     * @example
     * // Count the number of HorseVetReports
     * const count = await prisma.horseVetReport.count({
     *   where: {
     *     // ... the filter for the HorseVetReports we want to count
     *   }
     * })
    **/
    count<T extends HorseVetReportCountArgs>(
      args?: Subset<T, HorseVetReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorseVetReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HorseVetReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseVetReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HorseVetReportAggregateArgs>(args: Subset<T, HorseVetReportAggregateArgs>): Prisma.PrismaPromise<GetHorseVetReportAggregateType<T>>

    /**
     * Group by HorseVetReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseVetReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HorseVetReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorseVetReportGroupByArgs['orderBy'] }
        : { orderBy?: HorseVetReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HorseVetReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorseVetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HorseVetReport model
   */
  readonly fields: HorseVetReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HorseVetReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorseVetReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    horse<T extends HorseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HorseDefaultArgs<ExtArgs>>): Prisma__HorseClient<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HorseVetReport model
   */
  interface HorseVetReportFieldRefs {
    readonly id: FieldRef<"HorseVetReport", 'String'>
    readonly horseId: FieldRef<"HorseVetReport", 'String'>
    readonly reportUrl: FieldRef<"HorseVetReport", 'String'>
    readonly public: FieldRef<"HorseVetReport", 'Boolean'>
    readonly createdAt: FieldRef<"HorseVetReport", 'DateTime'>
    readonly updatedAt: FieldRef<"HorseVetReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HorseVetReport findUnique
   */
  export type HorseVetReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseVetReport
     */
    select?: HorseVetReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseVetReport
     */
    omit?: HorseVetReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseVetReportInclude<ExtArgs> | null
    /**
     * Filter, which HorseVetReport to fetch.
     */
    where: HorseVetReportWhereUniqueInput
  }

  /**
   * HorseVetReport findUniqueOrThrow
   */
  export type HorseVetReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseVetReport
     */
    select?: HorseVetReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseVetReport
     */
    omit?: HorseVetReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseVetReportInclude<ExtArgs> | null
    /**
     * Filter, which HorseVetReport to fetch.
     */
    where: HorseVetReportWhereUniqueInput
  }

  /**
   * HorseVetReport findFirst
   */
  export type HorseVetReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseVetReport
     */
    select?: HorseVetReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseVetReport
     */
    omit?: HorseVetReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseVetReportInclude<ExtArgs> | null
    /**
     * Filter, which HorseVetReport to fetch.
     */
    where?: HorseVetReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseVetReports to fetch.
     */
    orderBy?: HorseVetReportOrderByWithRelationInput | HorseVetReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorseVetReports.
     */
    cursor?: HorseVetReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseVetReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseVetReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorseVetReports.
     */
    distinct?: HorseVetReportScalarFieldEnum | HorseVetReportScalarFieldEnum[]
  }

  /**
   * HorseVetReport findFirstOrThrow
   */
  export type HorseVetReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseVetReport
     */
    select?: HorseVetReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseVetReport
     */
    omit?: HorseVetReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseVetReportInclude<ExtArgs> | null
    /**
     * Filter, which HorseVetReport to fetch.
     */
    where?: HorseVetReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseVetReports to fetch.
     */
    orderBy?: HorseVetReportOrderByWithRelationInput | HorseVetReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorseVetReports.
     */
    cursor?: HorseVetReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseVetReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseVetReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorseVetReports.
     */
    distinct?: HorseVetReportScalarFieldEnum | HorseVetReportScalarFieldEnum[]
  }

  /**
   * HorseVetReport findMany
   */
  export type HorseVetReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseVetReport
     */
    select?: HorseVetReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseVetReport
     */
    omit?: HorseVetReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseVetReportInclude<ExtArgs> | null
    /**
     * Filter, which HorseVetReports to fetch.
     */
    where?: HorseVetReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseVetReports to fetch.
     */
    orderBy?: HorseVetReportOrderByWithRelationInput | HorseVetReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HorseVetReports.
     */
    cursor?: HorseVetReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseVetReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseVetReports.
     */
    skip?: number
    distinct?: HorseVetReportScalarFieldEnum | HorseVetReportScalarFieldEnum[]
  }

  /**
   * HorseVetReport create
   */
  export type HorseVetReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseVetReport
     */
    select?: HorseVetReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseVetReport
     */
    omit?: HorseVetReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseVetReportInclude<ExtArgs> | null
    /**
     * The data needed to create a HorseVetReport.
     */
    data: XOR<HorseVetReportCreateInput, HorseVetReportUncheckedCreateInput>
  }

  /**
   * HorseVetReport createMany
   */
  export type HorseVetReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HorseVetReports.
     */
    data: HorseVetReportCreateManyInput | HorseVetReportCreateManyInput[]
  }

  /**
   * HorseVetReport createManyAndReturn
   */
  export type HorseVetReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseVetReport
     */
    select?: HorseVetReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorseVetReport
     */
    omit?: HorseVetReportOmit<ExtArgs> | null
    /**
     * The data used to create many HorseVetReports.
     */
    data: HorseVetReportCreateManyInput | HorseVetReportCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseVetReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HorseVetReport update
   */
  export type HorseVetReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseVetReport
     */
    select?: HorseVetReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseVetReport
     */
    omit?: HorseVetReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseVetReportInclude<ExtArgs> | null
    /**
     * The data needed to update a HorseVetReport.
     */
    data: XOR<HorseVetReportUpdateInput, HorseVetReportUncheckedUpdateInput>
    /**
     * Choose, which HorseVetReport to update.
     */
    where: HorseVetReportWhereUniqueInput
  }

  /**
   * HorseVetReport updateMany
   */
  export type HorseVetReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HorseVetReports.
     */
    data: XOR<HorseVetReportUpdateManyMutationInput, HorseVetReportUncheckedUpdateManyInput>
    /**
     * Filter which HorseVetReports to update
     */
    where?: HorseVetReportWhereInput
    /**
     * Limit how many HorseVetReports to update.
     */
    limit?: number
  }

  /**
   * HorseVetReport updateManyAndReturn
   */
  export type HorseVetReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseVetReport
     */
    select?: HorseVetReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorseVetReport
     */
    omit?: HorseVetReportOmit<ExtArgs> | null
    /**
     * The data used to update HorseVetReports.
     */
    data: XOR<HorseVetReportUpdateManyMutationInput, HorseVetReportUncheckedUpdateManyInput>
    /**
     * Filter which HorseVetReports to update
     */
    where?: HorseVetReportWhereInput
    /**
     * Limit how many HorseVetReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseVetReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HorseVetReport upsert
   */
  export type HorseVetReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseVetReport
     */
    select?: HorseVetReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseVetReport
     */
    omit?: HorseVetReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseVetReportInclude<ExtArgs> | null
    /**
     * The filter to search for the HorseVetReport to update in case it exists.
     */
    where: HorseVetReportWhereUniqueInput
    /**
     * In case the HorseVetReport found by the `where` argument doesn't exist, create a new HorseVetReport with this data.
     */
    create: XOR<HorseVetReportCreateInput, HorseVetReportUncheckedCreateInput>
    /**
     * In case the HorseVetReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorseVetReportUpdateInput, HorseVetReportUncheckedUpdateInput>
  }

  /**
   * HorseVetReport delete
   */
  export type HorseVetReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseVetReport
     */
    select?: HorseVetReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseVetReport
     */
    omit?: HorseVetReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseVetReportInclude<ExtArgs> | null
    /**
     * Filter which HorseVetReport to delete.
     */
    where: HorseVetReportWhereUniqueInput
  }

  /**
   * HorseVetReport deleteMany
   */
  export type HorseVetReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorseVetReports to delete
     */
    where?: HorseVetReportWhereInput
    /**
     * Limit how many HorseVetReports to delete.
     */
    limit?: number
  }

  /**
   * HorseVetReport without action
   */
  export type HorseVetReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseVetReport
     */
    select?: HorseVetReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseVetReport
     */
    omit?: HorseVetReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseVetReportInclude<ExtArgs> | null
  }


  /**
   * Model HorseXrayResults
   */

  export type AggregateHorseXrayResults = {
    _count: HorseXrayResultsCountAggregateOutputType | null
    _min: HorseXrayResultsMinAggregateOutputType | null
    _max: HorseXrayResultsMaxAggregateOutputType | null
  }

  export type HorseXrayResultsMinAggregateOutputType = {
    id: string | null
    horseId: string | null
    xrayUrl: string | null
    public: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorseXrayResultsMaxAggregateOutputType = {
    id: string | null
    horseId: string | null
    xrayUrl: string | null
    public: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorseXrayResultsCountAggregateOutputType = {
    id: number
    horseId: number
    xrayUrl: number
    public: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HorseXrayResultsMinAggregateInputType = {
    id?: true
    horseId?: true
    xrayUrl?: true
    public?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorseXrayResultsMaxAggregateInputType = {
    id?: true
    horseId?: true
    xrayUrl?: true
    public?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorseXrayResultsCountAggregateInputType = {
    id?: true
    horseId?: true
    xrayUrl?: true
    public?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HorseXrayResultsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorseXrayResults to aggregate.
     */
    where?: HorseXrayResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseXrayResults to fetch.
     */
    orderBy?: HorseXrayResultsOrderByWithRelationInput | HorseXrayResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorseXrayResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseXrayResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseXrayResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HorseXrayResults
    **/
    _count?: true | HorseXrayResultsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorseXrayResultsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorseXrayResultsMaxAggregateInputType
  }

  export type GetHorseXrayResultsAggregateType<T extends HorseXrayResultsAggregateArgs> = {
        [P in keyof T & keyof AggregateHorseXrayResults]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorseXrayResults[P]>
      : GetScalarType<T[P], AggregateHorseXrayResults[P]>
  }




  export type HorseXrayResultsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorseXrayResultsWhereInput
    orderBy?: HorseXrayResultsOrderByWithAggregationInput | HorseXrayResultsOrderByWithAggregationInput[]
    by: HorseXrayResultsScalarFieldEnum[] | HorseXrayResultsScalarFieldEnum
    having?: HorseXrayResultsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorseXrayResultsCountAggregateInputType | true
    _min?: HorseXrayResultsMinAggregateInputType
    _max?: HorseXrayResultsMaxAggregateInputType
  }

  export type HorseXrayResultsGroupByOutputType = {
    id: string
    horseId: string
    xrayUrl: string
    public: boolean
    createdAt: Date
    updatedAt: Date
    _count: HorseXrayResultsCountAggregateOutputType | null
    _min: HorseXrayResultsMinAggregateOutputType | null
    _max: HorseXrayResultsMaxAggregateOutputType | null
  }

  type GetHorseXrayResultsGroupByPayload<T extends HorseXrayResultsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorseXrayResultsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorseXrayResultsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorseXrayResultsGroupByOutputType[P]>
            : GetScalarType<T[P], HorseXrayResultsGroupByOutputType[P]>
        }
      >
    >


  export type HorseXrayResultsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horseId?: boolean
    xrayUrl?: boolean
    public?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horseXrayResults"]>

  export type HorseXrayResultsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horseId?: boolean
    xrayUrl?: boolean
    public?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horseXrayResults"]>

  export type HorseXrayResultsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horseId?: boolean
    xrayUrl?: boolean
    public?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horseXrayResults"]>

  export type HorseXrayResultsSelectScalar = {
    id?: boolean
    horseId?: boolean
    xrayUrl?: boolean
    public?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HorseXrayResultsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "horseId" | "xrayUrl" | "public" | "createdAt" | "updatedAt", ExtArgs["result"]["horseXrayResults"]>
  export type HorseXrayResultsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }
  export type HorseXrayResultsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }
  export type HorseXrayResultsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }

  export type $HorseXrayResultsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HorseXrayResults"
    objects: {
      horse: Prisma.$HorsePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      horseId: string
      xrayUrl: string
      public: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["horseXrayResults"]>
    composites: {}
  }

  type HorseXrayResultsGetPayload<S extends boolean | null | undefined | HorseXrayResultsDefaultArgs> = $Result.GetResult<Prisma.$HorseXrayResultsPayload, S>

  type HorseXrayResultsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorseXrayResultsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorseXrayResultsCountAggregateInputType | true
    }

  export interface HorseXrayResultsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HorseXrayResults'], meta: { name: 'HorseXrayResults' } }
    /**
     * Find zero or one HorseXrayResults that matches the filter.
     * @param {HorseXrayResultsFindUniqueArgs} args - Arguments to find a HorseXrayResults
     * @example
     * // Get one HorseXrayResults
     * const horseXrayResults = await prisma.horseXrayResults.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorseXrayResultsFindUniqueArgs>(args: SelectSubset<T, HorseXrayResultsFindUniqueArgs<ExtArgs>>): Prisma__HorseXrayResultsClient<$Result.GetResult<Prisma.$HorseXrayResultsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HorseXrayResults that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorseXrayResultsFindUniqueOrThrowArgs} args - Arguments to find a HorseXrayResults
     * @example
     * // Get one HorseXrayResults
     * const horseXrayResults = await prisma.horseXrayResults.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorseXrayResultsFindUniqueOrThrowArgs>(args: SelectSubset<T, HorseXrayResultsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorseXrayResultsClient<$Result.GetResult<Prisma.$HorseXrayResultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorseXrayResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseXrayResultsFindFirstArgs} args - Arguments to find a HorseXrayResults
     * @example
     * // Get one HorseXrayResults
     * const horseXrayResults = await prisma.horseXrayResults.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorseXrayResultsFindFirstArgs>(args?: SelectSubset<T, HorseXrayResultsFindFirstArgs<ExtArgs>>): Prisma__HorseXrayResultsClient<$Result.GetResult<Prisma.$HorseXrayResultsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorseXrayResults that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseXrayResultsFindFirstOrThrowArgs} args - Arguments to find a HorseXrayResults
     * @example
     * // Get one HorseXrayResults
     * const horseXrayResults = await prisma.horseXrayResults.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorseXrayResultsFindFirstOrThrowArgs>(args?: SelectSubset<T, HorseXrayResultsFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorseXrayResultsClient<$Result.GetResult<Prisma.$HorseXrayResultsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HorseXrayResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseXrayResultsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HorseXrayResults
     * const horseXrayResults = await prisma.horseXrayResults.findMany()
     * 
     * // Get first 10 HorseXrayResults
     * const horseXrayResults = await prisma.horseXrayResults.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horseXrayResultsWithIdOnly = await prisma.horseXrayResults.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorseXrayResultsFindManyArgs>(args?: SelectSubset<T, HorseXrayResultsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseXrayResultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HorseXrayResults.
     * @param {HorseXrayResultsCreateArgs} args - Arguments to create a HorseXrayResults.
     * @example
     * // Create one HorseXrayResults
     * const HorseXrayResults = await prisma.horseXrayResults.create({
     *   data: {
     *     // ... data to create a HorseXrayResults
     *   }
     * })
     * 
     */
    create<T extends HorseXrayResultsCreateArgs>(args: SelectSubset<T, HorseXrayResultsCreateArgs<ExtArgs>>): Prisma__HorseXrayResultsClient<$Result.GetResult<Prisma.$HorseXrayResultsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HorseXrayResults.
     * @param {HorseXrayResultsCreateManyArgs} args - Arguments to create many HorseXrayResults.
     * @example
     * // Create many HorseXrayResults
     * const horseXrayResults = await prisma.horseXrayResults.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorseXrayResultsCreateManyArgs>(args?: SelectSubset<T, HorseXrayResultsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HorseXrayResults and returns the data saved in the database.
     * @param {HorseXrayResultsCreateManyAndReturnArgs} args - Arguments to create many HorseXrayResults.
     * @example
     * // Create many HorseXrayResults
     * const horseXrayResults = await prisma.horseXrayResults.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HorseXrayResults and only return the `id`
     * const horseXrayResultsWithIdOnly = await prisma.horseXrayResults.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HorseXrayResultsCreateManyAndReturnArgs>(args?: SelectSubset<T, HorseXrayResultsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseXrayResultsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HorseXrayResults.
     * @param {HorseXrayResultsDeleteArgs} args - Arguments to delete one HorseXrayResults.
     * @example
     * // Delete one HorseXrayResults
     * const HorseXrayResults = await prisma.horseXrayResults.delete({
     *   where: {
     *     // ... filter to delete one HorseXrayResults
     *   }
     * })
     * 
     */
    delete<T extends HorseXrayResultsDeleteArgs>(args: SelectSubset<T, HorseXrayResultsDeleteArgs<ExtArgs>>): Prisma__HorseXrayResultsClient<$Result.GetResult<Prisma.$HorseXrayResultsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HorseXrayResults.
     * @param {HorseXrayResultsUpdateArgs} args - Arguments to update one HorseXrayResults.
     * @example
     * // Update one HorseXrayResults
     * const horseXrayResults = await prisma.horseXrayResults.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorseXrayResultsUpdateArgs>(args: SelectSubset<T, HorseXrayResultsUpdateArgs<ExtArgs>>): Prisma__HorseXrayResultsClient<$Result.GetResult<Prisma.$HorseXrayResultsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HorseXrayResults.
     * @param {HorseXrayResultsDeleteManyArgs} args - Arguments to filter HorseXrayResults to delete.
     * @example
     * // Delete a few HorseXrayResults
     * const { count } = await prisma.horseXrayResults.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorseXrayResultsDeleteManyArgs>(args?: SelectSubset<T, HorseXrayResultsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorseXrayResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseXrayResultsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HorseXrayResults
     * const horseXrayResults = await prisma.horseXrayResults.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorseXrayResultsUpdateManyArgs>(args: SelectSubset<T, HorseXrayResultsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorseXrayResults and returns the data updated in the database.
     * @param {HorseXrayResultsUpdateManyAndReturnArgs} args - Arguments to update many HorseXrayResults.
     * @example
     * // Update many HorseXrayResults
     * const horseXrayResults = await prisma.horseXrayResults.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HorseXrayResults and only return the `id`
     * const horseXrayResultsWithIdOnly = await prisma.horseXrayResults.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HorseXrayResultsUpdateManyAndReturnArgs>(args: SelectSubset<T, HorseXrayResultsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorseXrayResultsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HorseXrayResults.
     * @param {HorseXrayResultsUpsertArgs} args - Arguments to update or create a HorseXrayResults.
     * @example
     * // Update or create a HorseXrayResults
     * const horseXrayResults = await prisma.horseXrayResults.upsert({
     *   create: {
     *     // ... data to create a HorseXrayResults
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HorseXrayResults we want to update
     *   }
     * })
     */
    upsert<T extends HorseXrayResultsUpsertArgs>(args: SelectSubset<T, HorseXrayResultsUpsertArgs<ExtArgs>>): Prisma__HorseXrayResultsClient<$Result.GetResult<Prisma.$HorseXrayResultsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HorseXrayResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseXrayResultsCountArgs} args - Arguments to filter HorseXrayResults to count.
     * @example
     * // Count the number of HorseXrayResults
     * const count = await prisma.horseXrayResults.count({
     *   where: {
     *     // ... the filter for the HorseXrayResults we want to count
     *   }
     * })
    **/
    count<T extends HorseXrayResultsCountArgs>(
      args?: Subset<T, HorseXrayResultsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorseXrayResultsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HorseXrayResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseXrayResultsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HorseXrayResultsAggregateArgs>(args: Subset<T, HorseXrayResultsAggregateArgs>): Prisma.PrismaPromise<GetHorseXrayResultsAggregateType<T>>

    /**
     * Group by HorseXrayResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorseXrayResultsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HorseXrayResultsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorseXrayResultsGroupByArgs['orderBy'] }
        : { orderBy?: HorseXrayResultsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HorseXrayResultsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorseXrayResultsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HorseXrayResults model
   */
  readonly fields: HorseXrayResultsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HorseXrayResults.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorseXrayResultsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    horse<T extends HorseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HorseDefaultArgs<ExtArgs>>): Prisma__HorseClient<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HorseXrayResults model
   */
  interface HorseXrayResultsFieldRefs {
    readonly id: FieldRef<"HorseXrayResults", 'String'>
    readonly horseId: FieldRef<"HorseXrayResults", 'String'>
    readonly xrayUrl: FieldRef<"HorseXrayResults", 'String'>
    readonly public: FieldRef<"HorseXrayResults", 'Boolean'>
    readonly createdAt: FieldRef<"HorseXrayResults", 'DateTime'>
    readonly updatedAt: FieldRef<"HorseXrayResults", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HorseXrayResults findUnique
   */
  export type HorseXrayResultsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseXrayResults
     */
    select?: HorseXrayResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseXrayResults
     */
    omit?: HorseXrayResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseXrayResultsInclude<ExtArgs> | null
    /**
     * Filter, which HorseXrayResults to fetch.
     */
    where: HorseXrayResultsWhereUniqueInput
  }

  /**
   * HorseXrayResults findUniqueOrThrow
   */
  export type HorseXrayResultsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseXrayResults
     */
    select?: HorseXrayResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseXrayResults
     */
    omit?: HorseXrayResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseXrayResultsInclude<ExtArgs> | null
    /**
     * Filter, which HorseXrayResults to fetch.
     */
    where: HorseXrayResultsWhereUniqueInput
  }

  /**
   * HorseXrayResults findFirst
   */
  export type HorseXrayResultsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseXrayResults
     */
    select?: HorseXrayResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseXrayResults
     */
    omit?: HorseXrayResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseXrayResultsInclude<ExtArgs> | null
    /**
     * Filter, which HorseXrayResults to fetch.
     */
    where?: HorseXrayResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseXrayResults to fetch.
     */
    orderBy?: HorseXrayResultsOrderByWithRelationInput | HorseXrayResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorseXrayResults.
     */
    cursor?: HorseXrayResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseXrayResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseXrayResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorseXrayResults.
     */
    distinct?: HorseXrayResultsScalarFieldEnum | HorseXrayResultsScalarFieldEnum[]
  }

  /**
   * HorseXrayResults findFirstOrThrow
   */
  export type HorseXrayResultsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseXrayResults
     */
    select?: HorseXrayResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseXrayResults
     */
    omit?: HorseXrayResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseXrayResultsInclude<ExtArgs> | null
    /**
     * Filter, which HorseXrayResults to fetch.
     */
    where?: HorseXrayResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseXrayResults to fetch.
     */
    orderBy?: HorseXrayResultsOrderByWithRelationInput | HorseXrayResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorseXrayResults.
     */
    cursor?: HorseXrayResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseXrayResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseXrayResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorseXrayResults.
     */
    distinct?: HorseXrayResultsScalarFieldEnum | HorseXrayResultsScalarFieldEnum[]
  }

  /**
   * HorseXrayResults findMany
   */
  export type HorseXrayResultsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseXrayResults
     */
    select?: HorseXrayResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseXrayResults
     */
    omit?: HorseXrayResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseXrayResultsInclude<ExtArgs> | null
    /**
     * Filter, which HorseXrayResults to fetch.
     */
    where?: HorseXrayResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorseXrayResults to fetch.
     */
    orderBy?: HorseXrayResultsOrderByWithRelationInput | HorseXrayResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HorseXrayResults.
     */
    cursor?: HorseXrayResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorseXrayResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorseXrayResults.
     */
    skip?: number
    distinct?: HorseXrayResultsScalarFieldEnum | HorseXrayResultsScalarFieldEnum[]
  }

  /**
   * HorseXrayResults create
   */
  export type HorseXrayResultsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseXrayResults
     */
    select?: HorseXrayResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseXrayResults
     */
    omit?: HorseXrayResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseXrayResultsInclude<ExtArgs> | null
    /**
     * The data needed to create a HorseXrayResults.
     */
    data: XOR<HorseXrayResultsCreateInput, HorseXrayResultsUncheckedCreateInput>
  }

  /**
   * HorseXrayResults createMany
   */
  export type HorseXrayResultsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HorseXrayResults.
     */
    data: HorseXrayResultsCreateManyInput | HorseXrayResultsCreateManyInput[]
  }

  /**
   * HorseXrayResults createManyAndReturn
   */
  export type HorseXrayResultsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseXrayResults
     */
    select?: HorseXrayResultsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorseXrayResults
     */
    omit?: HorseXrayResultsOmit<ExtArgs> | null
    /**
     * The data used to create many HorseXrayResults.
     */
    data: HorseXrayResultsCreateManyInput | HorseXrayResultsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseXrayResultsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HorseXrayResults update
   */
  export type HorseXrayResultsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseXrayResults
     */
    select?: HorseXrayResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseXrayResults
     */
    omit?: HorseXrayResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseXrayResultsInclude<ExtArgs> | null
    /**
     * The data needed to update a HorseXrayResults.
     */
    data: XOR<HorseXrayResultsUpdateInput, HorseXrayResultsUncheckedUpdateInput>
    /**
     * Choose, which HorseXrayResults to update.
     */
    where: HorseXrayResultsWhereUniqueInput
  }

  /**
   * HorseXrayResults updateMany
   */
  export type HorseXrayResultsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HorseXrayResults.
     */
    data: XOR<HorseXrayResultsUpdateManyMutationInput, HorseXrayResultsUncheckedUpdateManyInput>
    /**
     * Filter which HorseXrayResults to update
     */
    where?: HorseXrayResultsWhereInput
    /**
     * Limit how many HorseXrayResults to update.
     */
    limit?: number
  }

  /**
   * HorseXrayResults updateManyAndReturn
   */
  export type HorseXrayResultsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseXrayResults
     */
    select?: HorseXrayResultsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorseXrayResults
     */
    omit?: HorseXrayResultsOmit<ExtArgs> | null
    /**
     * The data used to update HorseXrayResults.
     */
    data: XOR<HorseXrayResultsUpdateManyMutationInput, HorseXrayResultsUncheckedUpdateManyInput>
    /**
     * Filter which HorseXrayResults to update
     */
    where?: HorseXrayResultsWhereInput
    /**
     * Limit how many HorseXrayResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseXrayResultsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HorseXrayResults upsert
   */
  export type HorseXrayResultsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseXrayResults
     */
    select?: HorseXrayResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseXrayResults
     */
    omit?: HorseXrayResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseXrayResultsInclude<ExtArgs> | null
    /**
     * The filter to search for the HorseXrayResults to update in case it exists.
     */
    where: HorseXrayResultsWhereUniqueInput
    /**
     * In case the HorseXrayResults found by the `where` argument doesn't exist, create a new HorseXrayResults with this data.
     */
    create: XOR<HorseXrayResultsCreateInput, HorseXrayResultsUncheckedCreateInput>
    /**
     * In case the HorseXrayResults was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorseXrayResultsUpdateInput, HorseXrayResultsUncheckedUpdateInput>
  }

  /**
   * HorseXrayResults delete
   */
  export type HorseXrayResultsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseXrayResults
     */
    select?: HorseXrayResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseXrayResults
     */
    omit?: HorseXrayResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseXrayResultsInclude<ExtArgs> | null
    /**
     * Filter which HorseXrayResults to delete.
     */
    where: HorseXrayResultsWhereUniqueInput
  }

  /**
   * HorseXrayResults deleteMany
   */
  export type HorseXrayResultsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorseXrayResults to delete
     */
    where?: HorseXrayResultsWhereInput
    /**
     * Limit how many HorseXrayResults to delete.
     */
    limit?: number
  }

  /**
   * HorseXrayResults without action
   */
  export type HorseXrayResultsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorseXrayResults
     */
    select?: HorseXrayResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorseXrayResults
     */
    omit?: HorseXrayResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseXrayResultsInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    firebaseUid: string | null
    phoneNumber: string | null
    email: string | null
    whatsAppNumber: string | null
    verifiedSeller: boolean | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    firebaseUid: string | null
    phoneNumber: string | null
    email: string | null
    whatsAppNumber: string | null
    verifiedSeller: boolean | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    firebaseUid: number
    phoneNumber: number
    email: number
    whatsAppNumber: number
    verifiedSeller: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    firebaseUid?: true
    phoneNumber?: true
    email?: true
    whatsAppNumber?: true
    verifiedSeller?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    firebaseUid?: true
    phoneNumber?: true
    email?: true
    whatsAppNumber?: true
    verifiedSeller?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    firebaseUid?: true
    phoneNumber?: true
    email?: true
    whatsAppNumber?: true
    verifiedSeller?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    firebaseUid: string
    phoneNumber: string | null
    email: string | null
    whatsAppNumber: string | null
    verifiedSeller: boolean
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    firebaseUid?: boolean
    phoneNumber?: boolean
    email?: boolean
    whatsAppNumber?: boolean
    verifiedSeller?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userFavoriteHorses?: boolean | User$userFavoriteHorsesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    horses?: boolean | User$horsesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    firebaseUid?: boolean
    phoneNumber?: boolean
    email?: boolean
    whatsAppNumber?: boolean
    verifiedSeller?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    firebaseUid?: boolean
    phoneNumber?: boolean
    email?: boolean
    whatsAppNumber?: boolean
    verifiedSeller?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    firebaseUid?: boolean
    phoneNumber?: boolean
    email?: boolean
    whatsAppNumber?: boolean
    verifiedSeller?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "firebaseUid" | "phoneNumber" | "email" | "whatsAppNumber" | "verifiedSeller" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFavoriteHorses?: boolean | User$userFavoriteHorsesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    horses?: boolean | User$horsesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userFavoriteHorses: Prisma.$UserFavoriteHorsesPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      horses: Prisma.$HorsePayload<ExtArgs>[]
      reviews: Prisma.$UserReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      firebaseUid: string
      phoneNumber: string | null
      email: string | null
      whatsAppNumber: string | null
      verifiedSeller: boolean
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userFavoriteHorses<T extends User$userFavoriteHorsesArgs<ExtArgs> = {}>(args?: Subset<T, User$userFavoriteHorsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoriteHorsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    horses<T extends User$horsesArgs<ExtArgs> = {}>(args?: Subset<T, User$horsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly firebaseUid: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly whatsAppNumber: FieldRef<"User", 'String'>
    readonly verifiedSeller: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userFavoriteHorses
   */
  export type User$userFavoriteHorsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteHorses
     */
    select?: UserFavoriteHorsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteHorses
     */
    omit?: UserFavoriteHorsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteHorsesInclude<ExtArgs> | null
    where?: UserFavoriteHorsesWhereInput
    orderBy?: UserFavoriteHorsesOrderByWithRelationInput | UserFavoriteHorsesOrderByWithRelationInput[]
    cursor?: UserFavoriteHorsesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavoriteHorsesScalarFieldEnum | UserFavoriteHorsesScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.horses
   */
  export type User$horsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horse
     */
    select?: HorseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horse
     */
    omit?: HorseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorseInclude<ExtArgs> | null
    where?: HorseWhereInput
    orderBy?: HorseOrderByWithRelationInput | HorseOrderByWithRelationInput[]
    cursor?: HorseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorseScalarFieldEnum | HorseScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    where?: UserReviewWhereInput
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    cursor?: UserReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserReviewScalarFieldEnum | UserReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserFavoriteHorses
   */

  export type AggregateUserFavoriteHorses = {
    _count: UserFavoriteHorsesCountAggregateOutputType | null
    _min: UserFavoriteHorsesMinAggregateOutputType | null
    _max: UserFavoriteHorsesMaxAggregateOutputType | null
  }

  export type UserFavoriteHorsesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    horseId: string | null
    createdAt: Date | null
  }

  export type UserFavoriteHorsesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    horseId: string | null
    createdAt: Date | null
  }

  export type UserFavoriteHorsesCountAggregateOutputType = {
    id: number
    userId: number
    horseId: number
    createdAt: number
    _all: number
  }


  export type UserFavoriteHorsesMinAggregateInputType = {
    id?: true
    userId?: true
    horseId?: true
    createdAt?: true
  }

  export type UserFavoriteHorsesMaxAggregateInputType = {
    id?: true
    userId?: true
    horseId?: true
    createdAt?: true
  }

  export type UserFavoriteHorsesCountAggregateInputType = {
    id?: true
    userId?: true
    horseId?: true
    createdAt?: true
    _all?: true
  }

  export type UserFavoriteHorsesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavoriteHorses to aggregate.
     */
    where?: UserFavoriteHorsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavoriteHorses to fetch.
     */
    orderBy?: UserFavoriteHorsesOrderByWithRelationInput | UserFavoriteHorsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFavoriteHorsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavoriteHorses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavoriteHorses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFavoriteHorses
    **/
    _count?: true | UserFavoriteHorsesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFavoriteHorsesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFavoriteHorsesMaxAggregateInputType
  }

  export type GetUserFavoriteHorsesAggregateType<T extends UserFavoriteHorsesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFavoriteHorses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFavoriteHorses[P]>
      : GetScalarType<T[P], AggregateUserFavoriteHorses[P]>
  }




  export type UserFavoriteHorsesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteHorsesWhereInput
    orderBy?: UserFavoriteHorsesOrderByWithAggregationInput | UserFavoriteHorsesOrderByWithAggregationInput[]
    by: UserFavoriteHorsesScalarFieldEnum[] | UserFavoriteHorsesScalarFieldEnum
    having?: UserFavoriteHorsesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFavoriteHorsesCountAggregateInputType | true
    _min?: UserFavoriteHorsesMinAggregateInputType
    _max?: UserFavoriteHorsesMaxAggregateInputType
  }

  export type UserFavoriteHorsesGroupByOutputType = {
    id: string
    userId: string
    horseId: string
    createdAt: Date
    _count: UserFavoriteHorsesCountAggregateOutputType | null
    _min: UserFavoriteHorsesMinAggregateOutputType | null
    _max: UserFavoriteHorsesMaxAggregateOutputType | null
  }

  type GetUserFavoriteHorsesGroupByPayload<T extends UserFavoriteHorsesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFavoriteHorsesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFavoriteHorsesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFavoriteHorsesGroupByOutputType[P]>
            : GetScalarType<T[P], UserFavoriteHorsesGroupByOutputType[P]>
        }
      >
    >


  export type UserFavoriteHorsesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    horseId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavoriteHorses"]>

  export type UserFavoriteHorsesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    horseId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavoriteHorses"]>

  export type UserFavoriteHorsesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    horseId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavoriteHorses"]>

  export type UserFavoriteHorsesSelectScalar = {
    id?: boolean
    userId?: boolean
    horseId?: boolean
    createdAt?: boolean
  }

  export type UserFavoriteHorsesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "horseId" | "createdAt", ExtArgs["result"]["userFavoriteHorses"]>
  export type UserFavoriteHorsesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }
  export type UserFavoriteHorsesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }
  export type UserFavoriteHorsesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    horse?: boolean | HorseDefaultArgs<ExtArgs>
  }

  export type $UserFavoriteHorsesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFavoriteHorses"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      horse: Prisma.$HorsePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      horseId: string
      createdAt: Date
    }, ExtArgs["result"]["userFavoriteHorses"]>
    composites: {}
  }

  type UserFavoriteHorsesGetPayload<S extends boolean | null | undefined | UserFavoriteHorsesDefaultArgs> = $Result.GetResult<Prisma.$UserFavoriteHorsesPayload, S>

  type UserFavoriteHorsesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFavoriteHorsesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFavoriteHorsesCountAggregateInputType | true
    }

  export interface UserFavoriteHorsesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFavoriteHorses'], meta: { name: 'UserFavoriteHorses' } }
    /**
     * Find zero or one UserFavoriteHorses that matches the filter.
     * @param {UserFavoriteHorsesFindUniqueArgs} args - Arguments to find a UserFavoriteHorses
     * @example
     * // Get one UserFavoriteHorses
     * const userFavoriteHorses = await prisma.userFavoriteHorses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFavoriteHorsesFindUniqueArgs>(args: SelectSubset<T, UserFavoriteHorsesFindUniqueArgs<ExtArgs>>): Prisma__UserFavoriteHorsesClient<$Result.GetResult<Prisma.$UserFavoriteHorsesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFavoriteHorses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFavoriteHorsesFindUniqueOrThrowArgs} args - Arguments to find a UserFavoriteHorses
     * @example
     * // Get one UserFavoriteHorses
     * const userFavoriteHorses = await prisma.userFavoriteHorses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFavoriteHorsesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFavoriteHorsesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFavoriteHorsesClient<$Result.GetResult<Prisma.$UserFavoriteHorsesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavoriteHorses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteHorsesFindFirstArgs} args - Arguments to find a UserFavoriteHorses
     * @example
     * // Get one UserFavoriteHorses
     * const userFavoriteHorses = await prisma.userFavoriteHorses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFavoriteHorsesFindFirstArgs>(args?: SelectSubset<T, UserFavoriteHorsesFindFirstArgs<ExtArgs>>): Prisma__UserFavoriteHorsesClient<$Result.GetResult<Prisma.$UserFavoriteHorsesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavoriteHorses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteHorsesFindFirstOrThrowArgs} args - Arguments to find a UserFavoriteHorses
     * @example
     * // Get one UserFavoriteHorses
     * const userFavoriteHorses = await prisma.userFavoriteHorses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFavoriteHorsesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFavoriteHorsesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFavoriteHorsesClient<$Result.GetResult<Prisma.$UserFavoriteHorsesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFavoriteHorses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteHorsesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFavoriteHorses
     * const userFavoriteHorses = await prisma.userFavoriteHorses.findMany()
     * 
     * // Get first 10 UserFavoriteHorses
     * const userFavoriteHorses = await prisma.userFavoriteHorses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFavoriteHorsesWithIdOnly = await prisma.userFavoriteHorses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFavoriteHorsesFindManyArgs>(args?: SelectSubset<T, UserFavoriteHorsesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoriteHorsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFavoriteHorses.
     * @param {UserFavoriteHorsesCreateArgs} args - Arguments to create a UserFavoriteHorses.
     * @example
     * // Create one UserFavoriteHorses
     * const UserFavoriteHorses = await prisma.userFavoriteHorses.create({
     *   data: {
     *     // ... data to create a UserFavoriteHorses
     *   }
     * })
     * 
     */
    create<T extends UserFavoriteHorsesCreateArgs>(args: SelectSubset<T, UserFavoriteHorsesCreateArgs<ExtArgs>>): Prisma__UserFavoriteHorsesClient<$Result.GetResult<Prisma.$UserFavoriteHorsesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFavoriteHorses.
     * @param {UserFavoriteHorsesCreateManyArgs} args - Arguments to create many UserFavoriteHorses.
     * @example
     * // Create many UserFavoriteHorses
     * const userFavoriteHorses = await prisma.userFavoriteHorses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFavoriteHorsesCreateManyArgs>(args?: SelectSubset<T, UserFavoriteHorsesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFavoriteHorses and returns the data saved in the database.
     * @param {UserFavoriteHorsesCreateManyAndReturnArgs} args - Arguments to create many UserFavoriteHorses.
     * @example
     * // Create many UserFavoriteHorses
     * const userFavoriteHorses = await prisma.userFavoriteHorses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFavoriteHorses and only return the `id`
     * const userFavoriteHorsesWithIdOnly = await prisma.userFavoriteHorses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFavoriteHorsesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFavoriteHorsesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoriteHorsesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFavoriteHorses.
     * @param {UserFavoriteHorsesDeleteArgs} args - Arguments to delete one UserFavoriteHorses.
     * @example
     * // Delete one UserFavoriteHorses
     * const UserFavoriteHorses = await prisma.userFavoriteHorses.delete({
     *   where: {
     *     // ... filter to delete one UserFavoriteHorses
     *   }
     * })
     * 
     */
    delete<T extends UserFavoriteHorsesDeleteArgs>(args: SelectSubset<T, UserFavoriteHorsesDeleteArgs<ExtArgs>>): Prisma__UserFavoriteHorsesClient<$Result.GetResult<Prisma.$UserFavoriteHorsesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFavoriteHorses.
     * @param {UserFavoriteHorsesUpdateArgs} args - Arguments to update one UserFavoriteHorses.
     * @example
     * // Update one UserFavoriteHorses
     * const userFavoriteHorses = await prisma.userFavoriteHorses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFavoriteHorsesUpdateArgs>(args: SelectSubset<T, UserFavoriteHorsesUpdateArgs<ExtArgs>>): Prisma__UserFavoriteHorsesClient<$Result.GetResult<Prisma.$UserFavoriteHorsesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFavoriteHorses.
     * @param {UserFavoriteHorsesDeleteManyArgs} args - Arguments to filter UserFavoriteHorses to delete.
     * @example
     * // Delete a few UserFavoriteHorses
     * const { count } = await prisma.userFavoriteHorses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFavoriteHorsesDeleteManyArgs>(args?: SelectSubset<T, UserFavoriteHorsesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavoriteHorses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteHorsesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFavoriteHorses
     * const userFavoriteHorses = await prisma.userFavoriteHorses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFavoriteHorsesUpdateManyArgs>(args: SelectSubset<T, UserFavoriteHorsesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavoriteHorses and returns the data updated in the database.
     * @param {UserFavoriteHorsesUpdateManyAndReturnArgs} args - Arguments to update many UserFavoriteHorses.
     * @example
     * // Update many UserFavoriteHorses
     * const userFavoriteHorses = await prisma.userFavoriteHorses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFavoriteHorses and only return the `id`
     * const userFavoriteHorsesWithIdOnly = await prisma.userFavoriteHorses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserFavoriteHorsesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFavoriteHorsesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoriteHorsesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFavoriteHorses.
     * @param {UserFavoriteHorsesUpsertArgs} args - Arguments to update or create a UserFavoriteHorses.
     * @example
     * // Update or create a UserFavoriteHorses
     * const userFavoriteHorses = await prisma.userFavoriteHorses.upsert({
     *   create: {
     *     // ... data to create a UserFavoriteHorses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFavoriteHorses we want to update
     *   }
     * })
     */
    upsert<T extends UserFavoriteHorsesUpsertArgs>(args: SelectSubset<T, UserFavoriteHorsesUpsertArgs<ExtArgs>>): Prisma__UserFavoriteHorsesClient<$Result.GetResult<Prisma.$UserFavoriteHorsesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFavoriteHorses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteHorsesCountArgs} args - Arguments to filter UserFavoriteHorses to count.
     * @example
     * // Count the number of UserFavoriteHorses
     * const count = await prisma.userFavoriteHorses.count({
     *   where: {
     *     // ... the filter for the UserFavoriteHorses we want to count
     *   }
     * })
    **/
    count<T extends UserFavoriteHorsesCountArgs>(
      args?: Subset<T, UserFavoriteHorsesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFavoriteHorsesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFavoriteHorses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteHorsesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFavoriteHorsesAggregateArgs>(args: Subset<T, UserFavoriteHorsesAggregateArgs>): Prisma.PrismaPromise<GetUserFavoriteHorsesAggregateType<T>>

    /**
     * Group by UserFavoriteHorses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteHorsesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFavoriteHorsesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFavoriteHorsesGroupByArgs['orderBy'] }
        : { orderBy?: UserFavoriteHorsesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFavoriteHorsesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFavoriteHorsesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFavoriteHorses model
   */
  readonly fields: UserFavoriteHorsesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFavoriteHorses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFavoriteHorsesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    horse<T extends HorseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HorseDefaultArgs<ExtArgs>>): Prisma__HorseClient<$Result.GetResult<Prisma.$HorsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFavoriteHorses model
   */
  interface UserFavoriteHorsesFieldRefs {
    readonly id: FieldRef<"UserFavoriteHorses", 'String'>
    readonly userId: FieldRef<"UserFavoriteHorses", 'String'>
    readonly horseId: FieldRef<"UserFavoriteHorses", 'String'>
    readonly createdAt: FieldRef<"UserFavoriteHorses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserFavoriteHorses findUnique
   */
  export type UserFavoriteHorsesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteHorses
     */
    select?: UserFavoriteHorsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteHorses
     */
    omit?: UserFavoriteHorsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteHorsesInclude<ExtArgs> | null
    /**
     * Filter, which UserFavoriteHorses to fetch.
     */
    where: UserFavoriteHorsesWhereUniqueInput
  }

  /**
   * UserFavoriteHorses findUniqueOrThrow
   */
  export type UserFavoriteHorsesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteHorses
     */
    select?: UserFavoriteHorsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteHorses
     */
    omit?: UserFavoriteHorsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteHorsesInclude<ExtArgs> | null
    /**
     * Filter, which UserFavoriteHorses to fetch.
     */
    where: UserFavoriteHorsesWhereUniqueInput
  }

  /**
   * UserFavoriteHorses findFirst
   */
  export type UserFavoriteHorsesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteHorses
     */
    select?: UserFavoriteHorsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteHorses
     */
    omit?: UserFavoriteHorsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteHorsesInclude<ExtArgs> | null
    /**
     * Filter, which UserFavoriteHorses to fetch.
     */
    where?: UserFavoriteHorsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavoriteHorses to fetch.
     */
    orderBy?: UserFavoriteHorsesOrderByWithRelationInput | UserFavoriteHorsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavoriteHorses.
     */
    cursor?: UserFavoriteHorsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavoriteHorses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavoriteHorses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavoriteHorses.
     */
    distinct?: UserFavoriteHorsesScalarFieldEnum | UserFavoriteHorsesScalarFieldEnum[]
  }

  /**
   * UserFavoriteHorses findFirstOrThrow
   */
  export type UserFavoriteHorsesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteHorses
     */
    select?: UserFavoriteHorsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteHorses
     */
    omit?: UserFavoriteHorsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteHorsesInclude<ExtArgs> | null
    /**
     * Filter, which UserFavoriteHorses to fetch.
     */
    where?: UserFavoriteHorsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavoriteHorses to fetch.
     */
    orderBy?: UserFavoriteHorsesOrderByWithRelationInput | UserFavoriteHorsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavoriteHorses.
     */
    cursor?: UserFavoriteHorsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavoriteHorses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavoriteHorses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavoriteHorses.
     */
    distinct?: UserFavoriteHorsesScalarFieldEnum | UserFavoriteHorsesScalarFieldEnum[]
  }

  /**
   * UserFavoriteHorses findMany
   */
  export type UserFavoriteHorsesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteHorses
     */
    select?: UserFavoriteHorsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteHorses
     */
    omit?: UserFavoriteHorsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteHorsesInclude<ExtArgs> | null
    /**
     * Filter, which UserFavoriteHorses to fetch.
     */
    where?: UserFavoriteHorsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavoriteHorses to fetch.
     */
    orderBy?: UserFavoriteHorsesOrderByWithRelationInput | UserFavoriteHorsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFavoriteHorses.
     */
    cursor?: UserFavoriteHorsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavoriteHorses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavoriteHorses.
     */
    skip?: number
    distinct?: UserFavoriteHorsesScalarFieldEnum | UserFavoriteHorsesScalarFieldEnum[]
  }

  /**
   * UserFavoriteHorses create
   */
  export type UserFavoriteHorsesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteHorses
     */
    select?: UserFavoriteHorsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteHorses
     */
    omit?: UserFavoriteHorsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteHorsesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFavoriteHorses.
     */
    data: XOR<UserFavoriteHorsesCreateInput, UserFavoriteHorsesUncheckedCreateInput>
  }

  /**
   * UserFavoriteHorses createMany
   */
  export type UserFavoriteHorsesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFavoriteHorses.
     */
    data: UserFavoriteHorsesCreateManyInput | UserFavoriteHorsesCreateManyInput[]
  }

  /**
   * UserFavoriteHorses createManyAndReturn
   */
  export type UserFavoriteHorsesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteHorses
     */
    select?: UserFavoriteHorsesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteHorses
     */
    omit?: UserFavoriteHorsesOmit<ExtArgs> | null
    /**
     * The data used to create many UserFavoriteHorses.
     */
    data: UserFavoriteHorsesCreateManyInput | UserFavoriteHorsesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteHorsesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFavoriteHorses update
   */
  export type UserFavoriteHorsesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteHorses
     */
    select?: UserFavoriteHorsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteHorses
     */
    omit?: UserFavoriteHorsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteHorsesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFavoriteHorses.
     */
    data: XOR<UserFavoriteHorsesUpdateInput, UserFavoriteHorsesUncheckedUpdateInput>
    /**
     * Choose, which UserFavoriteHorses to update.
     */
    where: UserFavoriteHorsesWhereUniqueInput
  }

  /**
   * UserFavoriteHorses updateMany
   */
  export type UserFavoriteHorsesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFavoriteHorses.
     */
    data: XOR<UserFavoriteHorsesUpdateManyMutationInput, UserFavoriteHorsesUncheckedUpdateManyInput>
    /**
     * Filter which UserFavoriteHorses to update
     */
    where?: UserFavoriteHorsesWhereInput
    /**
     * Limit how many UserFavoriteHorses to update.
     */
    limit?: number
  }

  /**
   * UserFavoriteHorses updateManyAndReturn
   */
  export type UserFavoriteHorsesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteHorses
     */
    select?: UserFavoriteHorsesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteHorses
     */
    omit?: UserFavoriteHorsesOmit<ExtArgs> | null
    /**
     * The data used to update UserFavoriteHorses.
     */
    data: XOR<UserFavoriteHorsesUpdateManyMutationInput, UserFavoriteHorsesUncheckedUpdateManyInput>
    /**
     * Filter which UserFavoriteHorses to update
     */
    where?: UserFavoriteHorsesWhereInput
    /**
     * Limit how many UserFavoriteHorses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteHorsesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFavoriteHorses upsert
   */
  export type UserFavoriteHorsesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteHorses
     */
    select?: UserFavoriteHorsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteHorses
     */
    omit?: UserFavoriteHorsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteHorsesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFavoriteHorses to update in case it exists.
     */
    where: UserFavoriteHorsesWhereUniqueInput
    /**
     * In case the UserFavoriteHorses found by the `where` argument doesn't exist, create a new UserFavoriteHorses with this data.
     */
    create: XOR<UserFavoriteHorsesCreateInput, UserFavoriteHorsesUncheckedCreateInput>
    /**
     * In case the UserFavoriteHorses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFavoriteHorsesUpdateInput, UserFavoriteHorsesUncheckedUpdateInput>
  }

  /**
   * UserFavoriteHorses delete
   */
  export type UserFavoriteHorsesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteHorses
     */
    select?: UserFavoriteHorsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteHorses
     */
    omit?: UserFavoriteHorsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteHorsesInclude<ExtArgs> | null
    /**
     * Filter which UserFavoriteHorses to delete.
     */
    where: UserFavoriteHorsesWhereUniqueInput
  }

  /**
   * UserFavoriteHorses deleteMany
   */
  export type UserFavoriteHorsesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavoriteHorses to delete
     */
    where?: UserFavoriteHorsesWhereInput
    /**
     * Limit how many UserFavoriteHorses to delete.
     */
    limit?: number
  }

  /**
   * UserFavoriteHorses without action
   */
  export type UserFavoriteHorsesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteHorses
     */
    select?: UserFavoriteHorsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteHorses
     */
    omit?: UserFavoriteHorsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteHorsesInclude<ExtArgs> | null
  }


  /**
   * Model UserReview
   */

  export type AggregateUserReview = {
    _count: UserReviewCountAggregateOutputType | null
    _avg: UserReviewAvgAggregateOutputType | null
    _sum: UserReviewSumAggregateOutputType | null
    _min: UserReviewMinAggregateOutputType | null
    _max: UserReviewMaxAggregateOutputType | null
  }

  export type UserReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type UserReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type UserReviewMinAggregateOutputType = {
    id: string | null
    userId: string | null
    reviewer: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserReviewMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    reviewer: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserReviewCountAggregateOutputType = {
    id: number
    userId: number
    reviewer: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserReviewAvgAggregateInputType = {
    rating?: true
  }

  export type UserReviewSumAggregateInputType = {
    rating?: true
  }

  export type UserReviewMinAggregateInputType = {
    id?: true
    userId?: true
    reviewer?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    reviewer?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserReviewCountAggregateInputType = {
    id?: true
    userId?: true
    reviewer?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReview to aggregate.
     */
    where?: UserReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviews to fetch.
     */
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserReviews
    **/
    _count?: true | UserReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserReviewMaxAggregateInputType
  }

  export type GetUserReviewAggregateType<T extends UserReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateUserReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserReview[P]>
      : GetScalarType<T[P], AggregateUserReview[P]>
  }




  export type UserReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReviewWhereInput
    orderBy?: UserReviewOrderByWithAggregationInput | UserReviewOrderByWithAggregationInput[]
    by: UserReviewScalarFieldEnum[] | UserReviewScalarFieldEnum
    having?: UserReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserReviewCountAggregateInputType | true
    _avg?: UserReviewAvgAggregateInputType
    _sum?: UserReviewSumAggregateInputType
    _min?: UserReviewMinAggregateInputType
    _max?: UserReviewMaxAggregateInputType
  }

  export type UserReviewGroupByOutputType = {
    id: string
    userId: string
    reviewer: string
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserReviewCountAggregateOutputType | null
    _avg: UserReviewAvgAggregateOutputType | null
    _sum: UserReviewSumAggregateOutputType | null
    _min: UserReviewMinAggregateOutputType | null
    _max: UserReviewMaxAggregateOutputType | null
  }

  type GetUserReviewGroupByPayload<T extends UserReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserReviewGroupByOutputType[P]>
            : GetScalarType<T[P], UserReviewGroupByOutputType[P]>
        }
      >
    >


  export type UserReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reviewer?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userReview"]>

  export type UserReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reviewer?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userReview"]>

  export type UserReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reviewer?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userReview"]>

  export type UserReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    reviewer?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "reviewer" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["userReview"]>
  export type UserReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserReview"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      reviewer: string
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userReview"]>
    composites: {}
  }

  type UserReviewGetPayload<S extends boolean | null | undefined | UserReviewDefaultArgs> = $Result.GetResult<Prisma.$UserReviewPayload, S>

  type UserReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserReviewCountAggregateInputType | true
    }

  export interface UserReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserReview'], meta: { name: 'UserReview' } }
    /**
     * Find zero or one UserReview that matches the filter.
     * @param {UserReviewFindUniqueArgs} args - Arguments to find a UserReview
     * @example
     * // Get one UserReview
     * const userReview = await prisma.userReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserReviewFindUniqueArgs>(args: SelectSubset<T, UserReviewFindUniqueArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserReviewFindUniqueOrThrowArgs} args - Arguments to find a UserReview
     * @example
     * // Get one UserReview
     * const userReview = await prisma.userReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, UserReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewFindFirstArgs} args - Arguments to find a UserReview
     * @example
     * // Get one UserReview
     * const userReview = await prisma.userReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserReviewFindFirstArgs>(args?: SelectSubset<T, UserReviewFindFirstArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewFindFirstOrThrowArgs} args - Arguments to find a UserReview
     * @example
     * // Get one UserReview
     * const userReview = await prisma.userReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, UserReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserReviews
     * const userReviews = await prisma.userReview.findMany()
     * 
     * // Get first 10 UserReviews
     * const userReviews = await prisma.userReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userReviewWithIdOnly = await prisma.userReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserReviewFindManyArgs>(args?: SelectSubset<T, UserReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserReview.
     * @param {UserReviewCreateArgs} args - Arguments to create a UserReview.
     * @example
     * // Create one UserReview
     * const UserReview = await prisma.userReview.create({
     *   data: {
     *     // ... data to create a UserReview
     *   }
     * })
     * 
     */
    create<T extends UserReviewCreateArgs>(args: SelectSubset<T, UserReviewCreateArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserReviews.
     * @param {UserReviewCreateManyArgs} args - Arguments to create many UserReviews.
     * @example
     * // Create many UserReviews
     * const userReview = await prisma.userReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserReviewCreateManyArgs>(args?: SelectSubset<T, UserReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserReviews and returns the data saved in the database.
     * @param {UserReviewCreateManyAndReturnArgs} args - Arguments to create many UserReviews.
     * @example
     * // Create many UserReviews
     * const userReview = await prisma.userReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserReviews and only return the `id`
     * const userReviewWithIdOnly = await prisma.userReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, UserReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserReview.
     * @param {UserReviewDeleteArgs} args - Arguments to delete one UserReview.
     * @example
     * // Delete one UserReview
     * const UserReview = await prisma.userReview.delete({
     *   where: {
     *     // ... filter to delete one UserReview
     *   }
     * })
     * 
     */
    delete<T extends UserReviewDeleteArgs>(args: SelectSubset<T, UserReviewDeleteArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserReview.
     * @param {UserReviewUpdateArgs} args - Arguments to update one UserReview.
     * @example
     * // Update one UserReview
     * const userReview = await prisma.userReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserReviewUpdateArgs>(args: SelectSubset<T, UserReviewUpdateArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserReviews.
     * @param {UserReviewDeleteManyArgs} args - Arguments to filter UserReviews to delete.
     * @example
     * // Delete a few UserReviews
     * const { count } = await prisma.userReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserReviewDeleteManyArgs>(args?: SelectSubset<T, UserReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserReviews
     * const userReview = await prisma.userReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserReviewUpdateManyArgs>(args: SelectSubset<T, UserReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserReviews and returns the data updated in the database.
     * @param {UserReviewUpdateManyAndReturnArgs} args - Arguments to update many UserReviews.
     * @example
     * // Update many UserReviews
     * const userReview = await prisma.userReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserReviews and only return the `id`
     * const userReviewWithIdOnly = await prisma.userReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, UserReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserReview.
     * @param {UserReviewUpsertArgs} args - Arguments to update or create a UserReview.
     * @example
     * // Update or create a UserReview
     * const userReview = await prisma.userReview.upsert({
     *   create: {
     *     // ... data to create a UserReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserReview we want to update
     *   }
     * })
     */
    upsert<T extends UserReviewUpsertArgs>(args: SelectSubset<T, UserReviewUpsertArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewCountArgs} args - Arguments to filter UserReviews to count.
     * @example
     * // Count the number of UserReviews
     * const count = await prisma.userReview.count({
     *   where: {
     *     // ... the filter for the UserReviews we want to count
     *   }
     * })
    **/
    count<T extends UserReviewCountArgs>(
      args?: Subset<T, UserReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserReviewAggregateArgs>(args: Subset<T, UserReviewAggregateArgs>): Prisma.PrismaPromise<GetUserReviewAggregateType<T>>

    /**
     * Group by UserReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserReviewGroupByArgs['orderBy'] }
        : { orderBy?: UserReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserReview model
   */
  readonly fields: UserReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserReview model
   */
  interface UserReviewFieldRefs {
    readonly id: FieldRef<"UserReview", 'String'>
    readonly userId: FieldRef<"UserReview", 'String'>
    readonly reviewer: FieldRef<"UserReview", 'String'>
    readonly rating: FieldRef<"UserReview", 'Int'>
    readonly comment: FieldRef<"UserReview", 'String'>
    readonly createdAt: FieldRef<"UserReview", 'DateTime'>
    readonly updatedAt: FieldRef<"UserReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserReview findUnique
   */
  export type UserReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReview to fetch.
     */
    where: UserReviewWhereUniqueInput
  }

  /**
   * UserReview findUniqueOrThrow
   */
  export type UserReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReview to fetch.
     */
    where: UserReviewWhereUniqueInput
  }

  /**
   * UserReview findFirst
   */
  export type UserReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReview to fetch.
     */
    where?: UserReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviews to fetch.
     */
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserReviews.
     */
    cursor?: UserReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserReviews.
     */
    distinct?: UserReviewScalarFieldEnum | UserReviewScalarFieldEnum[]
  }

  /**
   * UserReview findFirstOrThrow
   */
  export type UserReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReview to fetch.
     */
    where?: UserReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviews to fetch.
     */
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserReviews.
     */
    cursor?: UserReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserReviews.
     */
    distinct?: UserReviewScalarFieldEnum | UserReviewScalarFieldEnum[]
  }

  /**
   * UserReview findMany
   */
  export type UserReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReviews to fetch.
     */
    where?: UserReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviews to fetch.
     */
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserReviews.
     */
    cursor?: UserReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviews.
     */
    skip?: number
    distinct?: UserReviewScalarFieldEnum | UserReviewScalarFieldEnum[]
  }

  /**
   * UserReview create
   */
  export type UserReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a UserReview.
     */
    data: XOR<UserReviewCreateInput, UserReviewUncheckedCreateInput>
  }

  /**
   * UserReview createMany
   */
  export type UserReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserReviews.
     */
    data: UserReviewCreateManyInput | UserReviewCreateManyInput[]
  }

  /**
   * UserReview createManyAndReturn
   */
  export type UserReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * The data used to create many UserReviews.
     */
    data: UserReviewCreateManyInput | UserReviewCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserReview update
   */
  export type UserReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a UserReview.
     */
    data: XOR<UserReviewUpdateInput, UserReviewUncheckedUpdateInput>
    /**
     * Choose, which UserReview to update.
     */
    where: UserReviewWhereUniqueInput
  }

  /**
   * UserReview updateMany
   */
  export type UserReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserReviews.
     */
    data: XOR<UserReviewUpdateManyMutationInput, UserReviewUncheckedUpdateManyInput>
    /**
     * Filter which UserReviews to update
     */
    where?: UserReviewWhereInput
    /**
     * Limit how many UserReviews to update.
     */
    limit?: number
  }

  /**
   * UserReview updateManyAndReturn
   */
  export type UserReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * The data used to update UserReviews.
     */
    data: XOR<UserReviewUpdateManyMutationInput, UserReviewUncheckedUpdateManyInput>
    /**
     * Filter which UserReviews to update
     */
    where?: UserReviewWhereInput
    /**
     * Limit how many UserReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserReview upsert
   */
  export type UserReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the UserReview to update in case it exists.
     */
    where: UserReviewWhereUniqueInput
    /**
     * In case the UserReview found by the `where` argument doesn't exist, create a new UserReview with this data.
     */
    create: XOR<UserReviewCreateInput, UserReviewUncheckedCreateInput>
    /**
     * In case the UserReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserReviewUpdateInput, UserReviewUncheckedUpdateInput>
  }

  /**
   * UserReview delete
   */
  export type UserReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter which UserReview to delete.
     */
    where: UserReviewWhereUniqueInput
  }

  /**
   * UserReview deleteMany
   */
  export type UserReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReviews to delete
     */
    where?: UserReviewWhereInput
    /**
     * Limit how many UserReviews to delete.
     */
    limit?: number
  }

  /**
   * UserReview without action
   */
  export type UserReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    read: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    title: string
    message: string
    read: boolean
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "read" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      message: string
      read: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const HorseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    name: 'name',
    pedigree: 'pedigree',
    age: 'age',
    genderId: 'genderId',
    height: 'height',
    disciplineId: 'disciplineId',
    location: 'location',
    price: 'price',
    description: 'description',
    veterinaryDocumentAvailable: 'veterinaryDocumentAvailable',
    xrayResultsAvailable: 'xrayResultsAvailable',
    videoUrl: 'videoUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HorseScalarFieldEnum = (typeof HorseScalarFieldEnum)[keyof typeof HorseScalarFieldEnum]


  export const HorseCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HorseCategoryScalarFieldEnum = (typeof HorseCategoryScalarFieldEnum)[keyof typeof HorseCategoryScalarFieldEnum]


  export const HorseGenderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HorseGenderScalarFieldEnum = (typeof HorseGenderScalarFieldEnum)[keyof typeof HorseGenderScalarFieldEnum]


  export const HorseImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    horseId: 'horseId'
  };

  export type HorseImageScalarFieldEnum = (typeof HorseImageScalarFieldEnum)[keyof typeof HorseImageScalarFieldEnum]


  export const HorseDisciplineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HorseDisciplineScalarFieldEnum = (typeof HorseDisciplineScalarFieldEnum)[keyof typeof HorseDisciplineScalarFieldEnum]


  export const HorseVetReportScalarFieldEnum: {
    id: 'id',
    horseId: 'horseId',
    reportUrl: 'reportUrl',
    public: 'public',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HorseVetReportScalarFieldEnum = (typeof HorseVetReportScalarFieldEnum)[keyof typeof HorseVetReportScalarFieldEnum]


  export const HorseXrayResultsScalarFieldEnum: {
    id: 'id',
    horseId: 'horseId',
    xrayUrl: 'xrayUrl',
    public: 'public',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HorseXrayResultsScalarFieldEnum = (typeof HorseXrayResultsScalarFieldEnum)[keyof typeof HorseXrayResultsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    firebaseUid: 'firebaseUid',
    phoneNumber: 'phoneNumber',
    email: 'email',
    whatsAppNumber: 'whatsAppNumber',
    verifiedSeller: 'verifiedSeller',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserFavoriteHorsesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    horseId: 'horseId',
    createdAt: 'createdAt'
  };

  export type UserFavoriteHorsesScalarFieldEnum = (typeof UserFavoriteHorsesScalarFieldEnum)[keyof typeof UserFavoriteHorsesScalarFieldEnum]


  export const UserReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reviewer: 'reviewer',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserReviewScalarFieldEnum = (typeof UserReviewScalarFieldEnum)[keyof typeof UserReviewScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    read: 'read',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type HorseWhereInput = {
    AND?: HorseWhereInput | HorseWhereInput[]
    OR?: HorseWhereInput[]
    NOT?: HorseWhereInput | HorseWhereInput[]
    id?: StringFilter<"Horse"> | string
    userId?: StringFilter<"Horse"> | string
    categoryId?: StringFilter<"Horse"> | string
    name?: StringFilter<"Horse"> | string
    pedigree?: StringNullableFilter<"Horse"> | string | null
    age?: IntFilter<"Horse"> | number
    genderId?: StringFilter<"Horse"> | string
    height?: IntFilter<"Horse"> | number
    disciplineId?: StringFilter<"Horse"> | string
    location?: StringFilter<"Horse"> | string
    price?: FloatFilter<"Horse"> | number
    description?: StringFilter<"Horse"> | string
    veterinaryDocumentAvailable?: BoolFilter<"Horse"> | boolean
    xrayResultsAvailable?: BoolFilter<"Horse"> | boolean
    videoUrl?: StringNullableFilter<"Horse"> | string | null
    status?: StringFilter<"Horse"> | string
    createdAt?: DateTimeFilter<"Horse"> | Date | string
    updatedAt?: DateTimeFilter<"Horse"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<HorseCategoryScalarRelationFilter, HorseCategoryWhereInput>
    gender?: XOR<HorseGenderScalarRelationFilter, HorseGenderWhereInput>
    discipline?: XOR<HorseDisciplineScalarRelationFilter, HorseDisciplineWhereInput>
    images?: HorseImageListRelationFilter
    vetReport?: XOR<HorseVetReportNullableScalarRelationFilter, HorseVetReportWhereInput> | null
    xrayResults?: XOR<HorseXrayResultsNullableScalarRelationFilter, HorseXrayResultsWhereInput> | null
    favoriteByUsers?: UserFavoriteHorsesListRelationFilter
  }

  export type HorseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    pedigree?: SortOrderInput | SortOrder
    age?: SortOrder
    genderId?: SortOrder
    height?: SortOrder
    disciplineId?: SortOrder
    location?: SortOrder
    price?: SortOrder
    description?: SortOrder
    veterinaryDocumentAvailable?: SortOrder
    xrayResultsAvailable?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: HorseCategoryOrderByWithRelationInput
    gender?: HorseGenderOrderByWithRelationInput
    discipline?: HorseDisciplineOrderByWithRelationInput
    images?: HorseImageOrderByRelationAggregateInput
    vetReport?: HorseVetReportOrderByWithRelationInput
    xrayResults?: HorseXrayResultsOrderByWithRelationInput
    favoriteByUsers?: UserFavoriteHorsesOrderByRelationAggregateInput
  }

  export type HorseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HorseWhereInput | HorseWhereInput[]
    OR?: HorseWhereInput[]
    NOT?: HorseWhereInput | HorseWhereInput[]
    userId?: StringFilter<"Horse"> | string
    categoryId?: StringFilter<"Horse"> | string
    name?: StringFilter<"Horse"> | string
    pedigree?: StringNullableFilter<"Horse"> | string | null
    age?: IntFilter<"Horse"> | number
    genderId?: StringFilter<"Horse"> | string
    height?: IntFilter<"Horse"> | number
    disciplineId?: StringFilter<"Horse"> | string
    location?: StringFilter<"Horse"> | string
    price?: FloatFilter<"Horse"> | number
    description?: StringFilter<"Horse"> | string
    veterinaryDocumentAvailable?: BoolFilter<"Horse"> | boolean
    xrayResultsAvailable?: BoolFilter<"Horse"> | boolean
    videoUrl?: StringNullableFilter<"Horse"> | string | null
    status?: StringFilter<"Horse"> | string
    createdAt?: DateTimeFilter<"Horse"> | Date | string
    updatedAt?: DateTimeFilter<"Horse"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<HorseCategoryScalarRelationFilter, HorseCategoryWhereInput>
    gender?: XOR<HorseGenderScalarRelationFilter, HorseGenderWhereInput>
    discipline?: XOR<HorseDisciplineScalarRelationFilter, HorseDisciplineWhereInput>
    images?: HorseImageListRelationFilter
    vetReport?: XOR<HorseVetReportNullableScalarRelationFilter, HorseVetReportWhereInput> | null
    xrayResults?: XOR<HorseXrayResultsNullableScalarRelationFilter, HorseXrayResultsWhereInput> | null
    favoriteByUsers?: UserFavoriteHorsesListRelationFilter
  }, "id">

  export type HorseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    pedigree?: SortOrderInput | SortOrder
    age?: SortOrder
    genderId?: SortOrder
    height?: SortOrder
    disciplineId?: SortOrder
    location?: SortOrder
    price?: SortOrder
    description?: SortOrder
    veterinaryDocumentAvailable?: SortOrder
    xrayResultsAvailable?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HorseCountOrderByAggregateInput
    _avg?: HorseAvgOrderByAggregateInput
    _max?: HorseMaxOrderByAggregateInput
    _min?: HorseMinOrderByAggregateInput
    _sum?: HorseSumOrderByAggregateInput
  }

  export type HorseScalarWhereWithAggregatesInput = {
    AND?: HorseScalarWhereWithAggregatesInput | HorseScalarWhereWithAggregatesInput[]
    OR?: HorseScalarWhereWithAggregatesInput[]
    NOT?: HorseScalarWhereWithAggregatesInput | HorseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Horse"> | string
    userId?: StringWithAggregatesFilter<"Horse"> | string
    categoryId?: StringWithAggregatesFilter<"Horse"> | string
    name?: StringWithAggregatesFilter<"Horse"> | string
    pedigree?: StringNullableWithAggregatesFilter<"Horse"> | string | null
    age?: IntWithAggregatesFilter<"Horse"> | number
    genderId?: StringWithAggregatesFilter<"Horse"> | string
    height?: IntWithAggregatesFilter<"Horse"> | number
    disciplineId?: StringWithAggregatesFilter<"Horse"> | string
    location?: StringWithAggregatesFilter<"Horse"> | string
    price?: FloatWithAggregatesFilter<"Horse"> | number
    description?: StringWithAggregatesFilter<"Horse"> | string
    veterinaryDocumentAvailable?: BoolWithAggregatesFilter<"Horse"> | boolean
    xrayResultsAvailable?: BoolWithAggregatesFilter<"Horse"> | boolean
    videoUrl?: StringNullableWithAggregatesFilter<"Horse"> | string | null
    status?: StringWithAggregatesFilter<"Horse"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Horse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Horse"> | Date | string
  }

  export type HorseCategoryWhereInput = {
    AND?: HorseCategoryWhereInput | HorseCategoryWhereInput[]
    OR?: HorseCategoryWhereInput[]
    NOT?: HorseCategoryWhereInput | HorseCategoryWhereInput[]
    id?: StringFilter<"HorseCategory"> | string
    name?: StringFilter<"HorseCategory"> | string
    imageUrl?: StringFilter<"HorseCategory"> | string
    createdAt?: DateTimeFilter<"HorseCategory"> | Date | string
    updatedAt?: DateTimeFilter<"HorseCategory"> | Date | string
    horses?: HorseListRelationFilter
  }

  export type HorseCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    horses?: HorseOrderByRelationAggregateInput
  }

  export type HorseCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: HorseCategoryWhereInput | HorseCategoryWhereInput[]
    OR?: HorseCategoryWhereInput[]
    NOT?: HorseCategoryWhereInput | HorseCategoryWhereInput[]
    imageUrl?: StringFilter<"HorseCategory"> | string
    createdAt?: DateTimeFilter<"HorseCategory"> | Date | string
    updatedAt?: DateTimeFilter<"HorseCategory"> | Date | string
    horses?: HorseListRelationFilter
  }, "id" | "name">

  export type HorseCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HorseCategoryCountOrderByAggregateInput
    _max?: HorseCategoryMaxOrderByAggregateInput
    _min?: HorseCategoryMinOrderByAggregateInput
  }

  export type HorseCategoryScalarWhereWithAggregatesInput = {
    AND?: HorseCategoryScalarWhereWithAggregatesInput | HorseCategoryScalarWhereWithAggregatesInput[]
    OR?: HorseCategoryScalarWhereWithAggregatesInput[]
    NOT?: HorseCategoryScalarWhereWithAggregatesInput | HorseCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HorseCategory"> | string
    name?: StringWithAggregatesFilter<"HorseCategory"> | string
    imageUrl?: StringWithAggregatesFilter<"HorseCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HorseCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HorseCategory"> | Date | string
  }

  export type HorseGenderWhereInput = {
    AND?: HorseGenderWhereInput | HorseGenderWhereInput[]
    OR?: HorseGenderWhereInput[]
    NOT?: HorseGenderWhereInput | HorseGenderWhereInput[]
    id?: StringFilter<"HorseGender"> | string
    name?: StringFilter<"HorseGender"> | string
    createdAt?: DateTimeFilter<"HorseGender"> | Date | string
    updatedAt?: DateTimeFilter<"HorseGender"> | Date | string
    horses?: HorseListRelationFilter
  }

  export type HorseGenderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    horses?: HorseOrderByRelationAggregateInput
  }

  export type HorseGenderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: HorseGenderWhereInput | HorseGenderWhereInput[]
    OR?: HorseGenderWhereInput[]
    NOT?: HorseGenderWhereInput | HorseGenderWhereInput[]
    createdAt?: DateTimeFilter<"HorseGender"> | Date | string
    updatedAt?: DateTimeFilter<"HorseGender"> | Date | string
    horses?: HorseListRelationFilter
  }, "id" | "name">

  export type HorseGenderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HorseGenderCountOrderByAggregateInput
    _max?: HorseGenderMaxOrderByAggregateInput
    _min?: HorseGenderMinOrderByAggregateInput
  }

  export type HorseGenderScalarWhereWithAggregatesInput = {
    AND?: HorseGenderScalarWhereWithAggregatesInput | HorseGenderScalarWhereWithAggregatesInput[]
    OR?: HorseGenderScalarWhereWithAggregatesInput[]
    NOT?: HorseGenderScalarWhereWithAggregatesInput | HorseGenderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HorseGender"> | string
    name?: StringWithAggregatesFilter<"HorseGender"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HorseGender"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HorseGender"> | Date | string
  }

  export type HorseImageWhereInput = {
    AND?: HorseImageWhereInput | HorseImageWhereInput[]
    OR?: HorseImageWhereInput[]
    NOT?: HorseImageWhereInput | HorseImageWhereInput[]
    id?: StringFilter<"HorseImage"> | string
    url?: StringFilter<"HorseImage"> | string
    createdAt?: DateTimeFilter<"HorseImage"> | Date | string
    updatedAt?: DateTimeFilter<"HorseImage"> | Date | string
    horseId?: StringFilter<"HorseImage"> | string
    horse?: XOR<HorseScalarRelationFilter, HorseWhereInput>
  }

  export type HorseImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    horseId?: SortOrder
    horse?: HorseOrderByWithRelationInput
  }

  export type HorseImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HorseImageWhereInput | HorseImageWhereInput[]
    OR?: HorseImageWhereInput[]
    NOT?: HorseImageWhereInput | HorseImageWhereInput[]
    url?: StringFilter<"HorseImage"> | string
    createdAt?: DateTimeFilter<"HorseImage"> | Date | string
    updatedAt?: DateTimeFilter<"HorseImage"> | Date | string
    horseId?: StringFilter<"HorseImage"> | string
    horse?: XOR<HorseScalarRelationFilter, HorseWhereInput>
  }, "id">

  export type HorseImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    horseId?: SortOrder
    _count?: HorseImageCountOrderByAggregateInput
    _max?: HorseImageMaxOrderByAggregateInput
    _min?: HorseImageMinOrderByAggregateInput
  }

  export type HorseImageScalarWhereWithAggregatesInput = {
    AND?: HorseImageScalarWhereWithAggregatesInput | HorseImageScalarWhereWithAggregatesInput[]
    OR?: HorseImageScalarWhereWithAggregatesInput[]
    NOT?: HorseImageScalarWhereWithAggregatesInput | HorseImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HorseImage"> | string
    url?: StringWithAggregatesFilter<"HorseImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HorseImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HorseImage"> | Date | string
    horseId?: StringWithAggregatesFilter<"HorseImage"> | string
  }

  export type HorseDisciplineWhereInput = {
    AND?: HorseDisciplineWhereInput | HorseDisciplineWhereInput[]
    OR?: HorseDisciplineWhereInput[]
    NOT?: HorseDisciplineWhereInput | HorseDisciplineWhereInput[]
    id?: StringFilter<"HorseDiscipline"> | string
    name?: StringFilter<"HorseDiscipline"> | string
    createdAt?: DateTimeFilter<"HorseDiscipline"> | Date | string
    updatedAt?: DateTimeFilter<"HorseDiscipline"> | Date | string
    horses?: HorseListRelationFilter
  }

  export type HorseDisciplineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    horses?: HorseOrderByRelationAggregateInput
  }

  export type HorseDisciplineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: HorseDisciplineWhereInput | HorseDisciplineWhereInput[]
    OR?: HorseDisciplineWhereInput[]
    NOT?: HorseDisciplineWhereInput | HorseDisciplineWhereInput[]
    createdAt?: DateTimeFilter<"HorseDiscipline"> | Date | string
    updatedAt?: DateTimeFilter<"HorseDiscipline"> | Date | string
    horses?: HorseListRelationFilter
  }, "id" | "name">

  export type HorseDisciplineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HorseDisciplineCountOrderByAggregateInput
    _max?: HorseDisciplineMaxOrderByAggregateInput
    _min?: HorseDisciplineMinOrderByAggregateInput
  }

  export type HorseDisciplineScalarWhereWithAggregatesInput = {
    AND?: HorseDisciplineScalarWhereWithAggregatesInput | HorseDisciplineScalarWhereWithAggregatesInput[]
    OR?: HorseDisciplineScalarWhereWithAggregatesInput[]
    NOT?: HorseDisciplineScalarWhereWithAggregatesInput | HorseDisciplineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HorseDiscipline"> | string
    name?: StringWithAggregatesFilter<"HorseDiscipline"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HorseDiscipline"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HorseDiscipline"> | Date | string
  }

  export type HorseVetReportWhereInput = {
    AND?: HorseVetReportWhereInput | HorseVetReportWhereInput[]
    OR?: HorseVetReportWhereInput[]
    NOT?: HorseVetReportWhereInput | HorseVetReportWhereInput[]
    id?: StringFilter<"HorseVetReport"> | string
    horseId?: StringFilter<"HorseVetReport"> | string
    reportUrl?: StringFilter<"HorseVetReport"> | string
    public?: BoolFilter<"HorseVetReport"> | boolean
    createdAt?: DateTimeFilter<"HorseVetReport"> | Date | string
    updatedAt?: DateTimeFilter<"HorseVetReport"> | Date | string
    horse?: XOR<HorseScalarRelationFilter, HorseWhereInput>
  }

  export type HorseVetReportOrderByWithRelationInput = {
    id?: SortOrder
    horseId?: SortOrder
    reportUrl?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    horse?: HorseOrderByWithRelationInput
  }

  export type HorseVetReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    horseId?: string
    AND?: HorseVetReportWhereInput | HorseVetReportWhereInput[]
    OR?: HorseVetReportWhereInput[]
    NOT?: HorseVetReportWhereInput | HorseVetReportWhereInput[]
    reportUrl?: StringFilter<"HorseVetReport"> | string
    public?: BoolFilter<"HorseVetReport"> | boolean
    createdAt?: DateTimeFilter<"HorseVetReport"> | Date | string
    updatedAt?: DateTimeFilter<"HorseVetReport"> | Date | string
    horse?: XOR<HorseScalarRelationFilter, HorseWhereInput>
  }, "id" | "horseId">

  export type HorseVetReportOrderByWithAggregationInput = {
    id?: SortOrder
    horseId?: SortOrder
    reportUrl?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HorseVetReportCountOrderByAggregateInput
    _max?: HorseVetReportMaxOrderByAggregateInput
    _min?: HorseVetReportMinOrderByAggregateInput
  }

  export type HorseVetReportScalarWhereWithAggregatesInput = {
    AND?: HorseVetReportScalarWhereWithAggregatesInput | HorseVetReportScalarWhereWithAggregatesInput[]
    OR?: HorseVetReportScalarWhereWithAggregatesInput[]
    NOT?: HorseVetReportScalarWhereWithAggregatesInput | HorseVetReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HorseVetReport"> | string
    horseId?: StringWithAggregatesFilter<"HorseVetReport"> | string
    reportUrl?: StringWithAggregatesFilter<"HorseVetReport"> | string
    public?: BoolWithAggregatesFilter<"HorseVetReport"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HorseVetReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HorseVetReport"> | Date | string
  }

  export type HorseXrayResultsWhereInput = {
    AND?: HorseXrayResultsWhereInput | HorseXrayResultsWhereInput[]
    OR?: HorseXrayResultsWhereInput[]
    NOT?: HorseXrayResultsWhereInput | HorseXrayResultsWhereInput[]
    id?: StringFilter<"HorseXrayResults"> | string
    horseId?: StringFilter<"HorseXrayResults"> | string
    xrayUrl?: StringFilter<"HorseXrayResults"> | string
    public?: BoolFilter<"HorseXrayResults"> | boolean
    createdAt?: DateTimeFilter<"HorseXrayResults"> | Date | string
    updatedAt?: DateTimeFilter<"HorseXrayResults"> | Date | string
    horse?: XOR<HorseScalarRelationFilter, HorseWhereInput>
  }

  export type HorseXrayResultsOrderByWithRelationInput = {
    id?: SortOrder
    horseId?: SortOrder
    xrayUrl?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    horse?: HorseOrderByWithRelationInput
  }

  export type HorseXrayResultsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    horseId?: string
    AND?: HorseXrayResultsWhereInput | HorseXrayResultsWhereInput[]
    OR?: HorseXrayResultsWhereInput[]
    NOT?: HorseXrayResultsWhereInput | HorseXrayResultsWhereInput[]
    xrayUrl?: StringFilter<"HorseXrayResults"> | string
    public?: BoolFilter<"HorseXrayResults"> | boolean
    createdAt?: DateTimeFilter<"HorseXrayResults"> | Date | string
    updatedAt?: DateTimeFilter<"HorseXrayResults"> | Date | string
    horse?: XOR<HorseScalarRelationFilter, HorseWhereInput>
  }, "id" | "horseId">

  export type HorseXrayResultsOrderByWithAggregationInput = {
    id?: SortOrder
    horseId?: SortOrder
    xrayUrl?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HorseXrayResultsCountOrderByAggregateInput
    _max?: HorseXrayResultsMaxOrderByAggregateInput
    _min?: HorseXrayResultsMinOrderByAggregateInput
  }

  export type HorseXrayResultsScalarWhereWithAggregatesInput = {
    AND?: HorseXrayResultsScalarWhereWithAggregatesInput | HorseXrayResultsScalarWhereWithAggregatesInput[]
    OR?: HorseXrayResultsScalarWhereWithAggregatesInput[]
    NOT?: HorseXrayResultsScalarWhereWithAggregatesInput | HorseXrayResultsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HorseXrayResults"> | string
    horseId?: StringWithAggregatesFilter<"HorseXrayResults"> | string
    xrayUrl?: StringWithAggregatesFilter<"HorseXrayResults"> | string
    public?: BoolWithAggregatesFilter<"HorseXrayResults"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HorseXrayResults"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HorseXrayResults"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    firebaseUid?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    whatsAppNumber?: StringNullableFilter<"User"> | string | null
    verifiedSeller?: BoolFilter<"User"> | boolean
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userFavoriteHorses?: UserFavoriteHorsesListRelationFilter
    notifications?: NotificationListRelationFilter
    horses?: HorseListRelationFilter
    reviews?: UserReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    firebaseUid?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    whatsAppNumber?: SortOrderInput | SortOrder
    verifiedSeller?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userFavoriteHorses?: UserFavoriteHorsesOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    horses?: HorseOrderByRelationAggregateInput
    reviews?: UserReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    firebaseUid?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    whatsAppNumber?: StringNullableFilter<"User"> | string | null
    verifiedSeller?: BoolFilter<"User"> | boolean
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userFavoriteHorses?: UserFavoriteHorsesListRelationFilter
    notifications?: NotificationListRelationFilter
    horses?: HorseListRelationFilter
    reviews?: UserReviewListRelationFilter
  }, "id" | "firebaseUid" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    firebaseUid?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    whatsAppNumber?: SortOrderInput | SortOrder
    verifiedSeller?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    firebaseUid?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    whatsAppNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    verifiedSeller?: BoolWithAggregatesFilter<"User"> | boolean
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserFavoriteHorsesWhereInput = {
    AND?: UserFavoriteHorsesWhereInput | UserFavoriteHorsesWhereInput[]
    OR?: UserFavoriteHorsesWhereInput[]
    NOT?: UserFavoriteHorsesWhereInput | UserFavoriteHorsesWhereInput[]
    id?: StringFilter<"UserFavoriteHorses"> | string
    userId?: StringFilter<"UserFavoriteHorses"> | string
    horseId?: StringFilter<"UserFavoriteHorses"> | string
    createdAt?: DateTimeFilter<"UserFavoriteHorses"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    horse?: XOR<HorseScalarRelationFilter, HorseWhereInput>
  }

  export type UserFavoriteHorsesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    horseId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    horse?: HorseOrderByWithRelationInput
  }

  export type UserFavoriteHorsesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_horseId?: UserFavoriteHorsesUserIdHorseIdCompoundUniqueInput
    AND?: UserFavoriteHorsesWhereInput | UserFavoriteHorsesWhereInput[]
    OR?: UserFavoriteHorsesWhereInput[]
    NOT?: UserFavoriteHorsesWhereInput | UserFavoriteHorsesWhereInput[]
    userId?: StringFilter<"UserFavoriteHorses"> | string
    horseId?: StringFilter<"UserFavoriteHorses"> | string
    createdAt?: DateTimeFilter<"UserFavoriteHorses"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    horse?: XOR<HorseScalarRelationFilter, HorseWhereInput>
  }, "id" | "userId_horseId">

  export type UserFavoriteHorsesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    horseId?: SortOrder
    createdAt?: SortOrder
    _count?: UserFavoriteHorsesCountOrderByAggregateInput
    _max?: UserFavoriteHorsesMaxOrderByAggregateInput
    _min?: UserFavoriteHorsesMinOrderByAggregateInput
  }

  export type UserFavoriteHorsesScalarWhereWithAggregatesInput = {
    AND?: UserFavoriteHorsesScalarWhereWithAggregatesInput | UserFavoriteHorsesScalarWhereWithAggregatesInput[]
    OR?: UserFavoriteHorsesScalarWhereWithAggregatesInput[]
    NOT?: UserFavoriteHorsesScalarWhereWithAggregatesInput | UserFavoriteHorsesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFavoriteHorses"> | string
    userId?: StringWithAggregatesFilter<"UserFavoriteHorses"> | string
    horseId?: StringWithAggregatesFilter<"UserFavoriteHorses"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserFavoriteHorses"> | Date | string
  }

  export type UserReviewWhereInput = {
    AND?: UserReviewWhereInput | UserReviewWhereInput[]
    OR?: UserReviewWhereInput[]
    NOT?: UserReviewWhereInput | UserReviewWhereInput[]
    id?: StringFilter<"UserReview"> | string
    userId?: StringFilter<"UserReview"> | string
    reviewer?: StringFilter<"UserReview"> | string
    rating?: IntFilter<"UserReview"> | number
    comment?: StringNullableFilter<"UserReview"> | string | null
    createdAt?: DateTimeFilter<"UserReview"> | Date | string
    updatedAt?: DateTimeFilter<"UserReview"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewer?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserReviewWhereInput | UserReviewWhereInput[]
    OR?: UserReviewWhereInput[]
    NOT?: UserReviewWhereInput | UserReviewWhereInput[]
    userId?: StringFilter<"UserReview"> | string
    reviewer?: StringFilter<"UserReview"> | string
    rating?: IntFilter<"UserReview"> | number
    comment?: StringNullableFilter<"UserReview"> | string | null
    createdAt?: DateTimeFilter<"UserReview"> | Date | string
    updatedAt?: DateTimeFilter<"UserReview"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewer?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserReviewCountOrderByAggregateInput
    _avg?: UserReviewAvgOrderByAggregateInput
    _max?: UserReviewMaxOrderByAggregateInput
    _min?: UserReviewMinOrderByAggregateInput
    _sum?: UserReviewSumOrderByAggregateInput
  }

  export type UserReviewScalarWhereWithAggregatesInput = {
    AND?: UserReviewScalarWhereWithAggregatesInput | UserReviewScalarWhereWithAggregatesInput[]
    OR?: UserReviewScalarWhereWithAggregatesInput[]
    NOT?: UserReviewScalarWhereWithAggregatesInput | UserReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserReview"> | string
    userId?: StringWithAggregatesFilter<"UserReview"> | string
    reviewer?: StringWithAggregatesFilter<"UserReview"> | string
    rating?: IntWithAggregatesFilter<"UserReview"> | number
    comment?: StringNullableWithAggregatesFilter<"UserReview"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserReview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserReview"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type HorseCreateInput = {
    id?: string
    name: string
    pedigree?: string | null
    age: number
    height: number
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHorsesInput
    category: HorseCategoryCreateNestedOneWithoutHorsesInput
    gender: HorseGenderCreateNestedOneWithoutHorsesInput
    discipline: HorseDisciplineCreateNestedOneWithoutHorsesInput
    images?: HorseImageCreateNestedManyWithoutHorseInput
    vetReport?: HorseVetReportCreateNestedOneWithoutHorseInput
    xrayResults?: HorseXrayResultsCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesCreateNestedManyWithoutHorseInput
  }

  export type HorseUncheckedCreateInput = {
    id?: string
    userId: string
    categoryId: string
    name: string
    pedigree?: string | null
    age: number
    genderId: string
    height: number
    disciplineId: string
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: HorseImageUncheckedCreateNestedManyWithoutHorseInput
    vetReport?: HorseVetReportUncheckedCreateNestedOneWithoutHorseInput
    xrayResults?: HorseXrayResultsUncheckedCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput
  }

  export type HorseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHorsesNestedInput
    category?: HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput
    gender?: HorseGenderUpdateOneRequiredWithoutHorsesNestedInput
    discipline?: HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput
    images?: HorseImageUpdateManyWithoutHorseNestedInput
    vetReport?: HorseVetReportUpdateOneWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUpdateManyWithoutHorseNestedInput
  }

  export type HorseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    genderId?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    disciplineId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: HorseImageUncheckedUpdateManyWithoutHorseNestedInput
    vetReport?: HorseVetReportUncheckedUpdateOneWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUncheckedUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput
  }

  export type HorseCreateManyInput = {
    id?: string
    userId: string
    categoryId: string
    name: string
    pedigree?: string | null
    age: number
    genderId: string
    height: number
    disciplineId: string
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    genderId?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    disciplineId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseCategoryCreateInput = {
    id?: string
    name: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    horses?: HorseCreateNestedManyWithoutCategoryInput
  }

  export type HorseCategoryUncheckedCreateInput = {
    id?: string
    name: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    horses?: HorseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type HorseCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horses?: HorseUpdateManyWithoutCategoryNestedInput
  }

  export type HorseCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horses?: HorseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type HorseCategoryCreateManyInput = {
    id?: string
    name: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseGenderCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    horses?: HorseCreateNestedManyWithoutGenderInput
  }

  export type HorseGenderUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    horses?: HorseUncheckedCreateNestedManyWithoutGenderInput
  }

  export type HorseGenderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horses?: HorseUpdateManyWithoutGenderNestedInput
  }

  export type HorseGenderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horses?: HorseUncheckedUpdateManyWithoutGenderNestedInput
  }

  export type HorseGenderCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseGenderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseGenderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseImageCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    horse: HorseCreateNestedOneWithoutImagesInput
  }

  export type HorseImageUncheckedCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    horseId: string
  }

  export type HorseImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horse?: HorseUpdateOneRequiredWithoutImagesNestedInput
  }

  export type HorseImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horseId?: StringFieldUpdateOperationsInput | string
  }

  export type HorseImageCreateManyInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    horseId: string
  }

  export type HorseImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horseId?: StringFieldUpdateOperationsInput | string
  }

  export type HorseDisciplineCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    horses?: HorseCreateNestedManyWithoutDisciplineInput
  }

  export type HorseDisciplineUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    horses?: HorseUncheckedCreateNestedManyWithoutDisciplineInput
  }

  export type HorseDisciplineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horses?: HorseUpdateManyWithoutDisciplineNestedInput
  }

  export type HorseDisciplineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horses?: HorseUncheckedUpdateManyWithoutDisciplineNestedInput
  }

  export type HorseDisciplineCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseDisciplineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseDisciplineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseVetReportCreateInput = {
    id?: string
    reportUrl: string
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    horse: HorseCreateNestedOneWithoutVetReportInput
  }

  export type HorseVetReportUncheckedCreateInput = {
    id?: string
    horseId: string
    reportUrl: string
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseVetReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportUrl?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horse?: HorseUpdateOneRequiredWithoutVetReportNestedInput
  }

  export type HorseVetReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    horseId?: StringFieldUpdateOperationsInput | string
    reportUrl?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseVetReportCreateManyInput = {
    id?: string
    horseId: string
    reportUrl: string
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseVetReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportUrl?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseVetReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    horseId?: StringFieldUpdateOperationsInput | string
    reportUrl?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseXrayResultsCreateInput = {
    id?: string
    xrayUrl: string
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    horse: HorseCreateNestedOneWithoutXrayResultsInput
  }

  export type HorseXrayResultsUncheckedCreateInput = {
    id?: string
    horseId: string
    xrayUrl: string
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseXrayResultsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    xrayUrl?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horse?: HorseUpdateOneRequiredWithoutXrayResultsNestedInput
  }

  export type HorseXrayResultsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    horseId?: StringFieldUpdateOperationsInput | string
    xrayUrl?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseXrayResultsCreateManyInput = {
    id?: string
    horseId: string
    xrayUrl: string
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseXrayResultsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    xrayUrl?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseXrayResultsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    horseId?: StringFieldUpdateOperationsInput | string
    xrayUrl?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    firebaseUid: string
    phoneNumber?: string | null
    email?: string | null
    whatsAppNumber?: string | null
    verifiedSeller?: boolean
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userFavoriteHorses?: UserFavoriteHorsesCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    horses?: HorseCreateNestedManyWithoutUserInput
    reviews?: UserReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    firebaseUid: string
    phoneNumber?: string | null
    email?: string | null
    whatsAppNumber?: string | null
    verifiedSeller?: boolean
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userFavoriteHorses?: UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    horses?: HorseUncheckedCreateNestedManyWithoutUserInput
    reviews?: UserReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedSeller?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFavoriteHorses?: UserFavoriteHorsesUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    horses?: HorseUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedSeller?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFavoriteHorses?: UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    horses?: HorseUncheckedUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    firebaseUid: string
    phoneNumber?: string | null
    email?: string | null
    whatsAppNumber?: string | null
    verifiedSeller?: boolean
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedSeller?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedSeller?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteHorsesCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserFavoriteHorsesInput
    horse: HorseCreateNestedOneWithoutFavoriteByUsersInput
  }

  export type UserFavoriteHorsesUncheckedCreateInput = {
    id?: string
    userId: string
    horseId: string
    createdAt?: Date | string
  }

  export type UserFavoriteHorsesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserFavoriteHorsesNestedInput
    horse?: HorseUpdateOneRequiredWithoutFavoriteByUsersNestedInput
  }

  export type UserFavoriteHorsesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    horseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteHorsesCreateManyInput = {
    id?: string
    userId: string
    horseId: string
    createdAt?: Date | string
  }

  export type UserFavoriteHorsesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteHorsesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    horseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserReviewCreateInput = {
    id?: string
    reviewer: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type UserReviewUncheckedCreateInput = {
    id?: string
    userId: string
    reviewer: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewer?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type UserReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reviewer?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserReviewCreateManyInput = {
    id?: string
    userId: string
    reviewer: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewer?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reviewer?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HorseCategoryScalarRelationFilter = {
    is?: HorseCategoryWhereInput
    isNot?: HorseCategoryWhereInput
  }

  export type HorseGenderScalarRelationFilter = {
    is?: HorseGenderWhereInput
    isNot?: HorseGenderWhereInput
  }

  export type HorseDisciplineScalarRelationFilter = {
    is?: HorseDisciplineWhereInput
    isNot?: HorseDisciplineWhereInput
  }

  export type HorseImageListRelationFilter = {
    every?: HorseImageWhereInput
    some?: HorseImageWhereInput
    none?: HorseImageWhereInput
  }

  export type HorseVetReportNullableScalarRelationFilter = {
    is?: HorseVetReportWhereInput | null
    isNot?: HorseVetReportWhereInput | null
  }

  export type HorseXrayResultsNullableScalarRelationFilter = {
    is?: HorseXrayResultsWhereInput | null
    isNot?: HorseXrayResultsWhereInput | null
  }

  export type UserFavoriteHorsesListRelationFilter = {
    every?: UserFavoriteHorsesWhereInput
    some?: UserFavoriteHorsesWhereInput
    none?: UserFavoriteHorsesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HorseImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFavoriteHorsesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HorseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    pedigree?: SortOrder
    age?: SortOrder
    genderId?: SortOrder
    height?: SortOrder
    disciplineId?: SortOrder
    location?: SortOrder
    price?: SortOrder
    description?: SortOrder
    veterinaryDocumentAvailable?: SortOrder
    xrayResultsAvailable?: SortOrder
    videoUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseAvgOrderByAggregateInput = {
    age?: SortOrder
    height?: SortOrder
    price?: SortOrder
  }

  export type HorseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    pedigree?: SortOrder
    age?: SortOrder
    genderId?: SortOrder
    height?: SortOrder
    disciplineId?: SortOrder
    location?: SortOrder
    price?: SortOrder
    description?: SortOrder
    veterinaryDocumentAvailable?: SortOrder
    xrayResultsAvailable?: SortOrder
    videoUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    pedigree?: SortOrder
    age?: SortOrder
    genderId?: SortOrder
    height?: SortOrder
    disciplineId?: SortOrder
    location?: SortOrder
    price?: SortOrder
    description?: SortOrder
    veterinaryDocumentAvailable?: SortOrder
    xrayResultsAvailable?: SortOrder
    videoUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseSumOrderByAggregateInput = {
    age?: SortOrder
    height?: SortOrder
    price?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type HorseListRelationFilter = {
    every?: HorseWhereInput
    some?: HorseWhereInput
    none?: HorseWhereInput
  }

  export type HorseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HorseCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseGenderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseGenderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseGenderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseScalarRelationFilter = {
    is?: HorseWhereInput
    isNot?: HorseWhereInput
  }

  export type HorseImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    horseId?: SortOrder
  }

  export type HorseImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    horseId?: SortOrder
  }

  export type HorseImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    horseId?: SortOrder
  }

  export type HorseDisciplineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseDisciplineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseDisciplineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseVetReportCountOrderByAggregateInput = {
    id?: SortOrder
    horseId?: SortOrder
    reportUrl?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseVetReportMaxOrderByAggregateInput = {
    id?: SortOrder
    horseId?: SortOrder
    reportUrl?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseVetReportMinOrderByAggregateInput = {
    id?: SortOrder
    horseId?: SortOrder
    reportUrl?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseXrayResultsCountOrderByAggregateInput = {
    id?: SortOrder
    horseId?: SortOrder
    xrayUrl?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseXrayResultsMaxOrderByAggregateInput = {
    id?: SortOrder
    horseId?: SortOrder
    xrayUrl?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorseXrayResultsMinOrderByAggregateInput = {
    id?: SortOrder
    horseId?: SortOrder
    xrayUrl?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type UserReviewListRelationFilter = {
    every?: UserReviewWhereInput
    some?: UserReviewWhereInput
    none?: UserReviewWhereInput
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    firebaseUid?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    whatsAppNumber?: SortOrder
    verifiedSeller?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    firebaseUid?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    whatsAppNumber?: SortOrder
    verifiedSeller?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    firebaseUid?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    whatsAppNumber?: SortOrder
    verifiedSeller?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFavoriteHorsesUserIdHorseIdCompoundUniqueInput = {
    userId: string
    horseId: string
  }

  export type UserFavoriteHorsesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    horseId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFavoriteHorsesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    horseId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFavoriteHorsesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    horseId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewer?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UserReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewer?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewer?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutHorsesInput = {
    create?: XOR<UserCreateWithoutHorsesInput, UserUncheckedCreateWithoutHorsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHorsesInput
    connect?: UserWhereUniqueInput
  }

  export type HorseCategoryCreateNestedOneWithoutHorsesInput = {
    create?: XOR<HorseCategoryCreateWithoutHorsesInput, HorseCategoryUncheckedCreateWithoutHorsesInput>
    connectOrCreate?: HorseCategoryCreateOrConnectWithoutHorsesInput
    connect?: HorseCategoryWhereUniqueInput
  }

  export type HorseGenderCreateNestedOneWithoutHorsesInput = {
    create?: XOR<HorseGenderCreateWithoutHorsesInput, HorseGenderUncheckedCreateWithoutHorsesInput>
    connectOrCreate?: HorseGenderCreateOrConnectWithoutHorsesInput
    connect?: HorseGenderWhereUniqueInput
  }

  export type HorseDisciplineCreateNestedOneWithoutHorsesInput = {
    create?: XOR<HorseDisciplineCreateWithoutHorsesInput, HorseDisciplineUncheckedCreateWithoutHorsesInput>
    connectOrCreate?: HorseDisciplineCreateOrConnectWithoutHorsesInput
    connect?: HorseDisciplineWhereUniqueInput
  }

  export type HorseImageCreateNestedManyWithoutHorseInput = {
    create?: XOR<HorseImageCreateWithoutHorseInput, HorseImageUncheckedCreateWithoutHorseInput> | HorseImageCreateWithoutHorseInput[] | HorseImageUncheckedCreateWithoutHorseInput[]
    connectOrCreate?: HorseImageCreateOrConnectWithoutHorseInput | HorseImageCreateOrConnectWithoutHorseInput[]
    createMany?: HorseImageCreateManyHorseInputEnvelope
    connect?: HorseImageWhereUniqueInput | HorseImageWhereUniqueInput[]
  }

  export type HorseVetReportCreateNestedOneWithoutHorseInput = {
    create?: XOR<HorseVetReportCreateWithoutHorseInput, HorseVetReportUncheckedCreateWithoutHorseInput>
    connectOrCreate?: HorseVetReportCreateOrConnectWithoutHorseInput
    connect?: HorseVetReportWhereUniqueInput
  }

  export type HorseXrayResultsCreateNestedOneWithoutHorseInput = {
    create?: XOR<HorseXrayResultsCreateWithoutHorseInput, HorseXrayResultsUncheckedCreateWithoutHorseInput>
    connectOrCreate?: HorseXrayResultsCreateOrConnectWithoutHorseInput
    connect?: HorseXrayResultsWhereUniqueInput
  }

  export type UserFavoriteHorsesCreateNestedManyWithoutHorseInput = {
    create?: XOR<UserFavoriteHorsesCreateWithoutHorseInput, UserFavoriteHorsesUncheckedCreateWithoutHorseInput> | UserFavoriteHorsesCreateWithoutHorseInput[] | UserFavoriteHorsesUncheckedCreateWithoutHorseInput[]
    connectOrCreate?: UserFavoriteHorsesCreateOrConnectWithoutHorseInput | UserFavoriteHorsesCreateOrConnectWithoutHorseInput[]
    createMany?: UserFavoriteHorsesCreateManyHorseInputEnvelope
    connect?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
  }

  export type HorseImageUncheckedCreateNestedManyWithoutHorseInput = {
    create?: XOR<HorseImageCreateWithoutHorseInput, HorseImageUncheckedCreateWithoutHorseInput> | HorseImageCreateWithoutHorseInput[] | HorseImageUncheckedCreateWithoutHorseInput[]
    connectOrCreate?: HorseImageCreateOrConnectWithoutHorseInput | HorseImageCreateOrConnectWithoutHorseInput[]
    createMany?: HorseImageCreateManyHorseInputEnvelope
    connect?: HorseImageWhereUniqueInput | HorseImageWhereUniqueInput[]
  }

  export type HorseVetReportUncheckedCreateNestedOneWithoutHorseInput = {
    create?: XOR<HorseVetReportCreateWithoutHorseInput, HorseVetReportUncheckedCreateWithoutHorseInput>
    connectOrCreate?: HorseVetReportCreateOrConnectWithoutHorseInput
    connect?: HorseVetReportWhereUniqueInput
  }

  export type HorseXrayResultsUncheckedCreateNestedOneWithoutHorseInput = {
    create?: XOR<HorseXrayResultsCreateWithoutHorseInput, HorseXrayResultsUncheckedCreateWithoutHorseInput>
    connectOrCreate?: HorseXrayResultsCreateOrConnectWithoutHorseInput
    connect?: HorseXrayResultsWhereUniqueInput
  }

  export type UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput = {
    create?: XOR<UserFavoriteHorsesCreateWithoutHorseInput, UserFavoriteHorsesUncheckedCreateWithoutHorseInput> | UserFavoriteHorsesCreateWithoutHorseInput[] | UserFavoriteHorsesUncheckedCreateWithoutHorseInput[]
    connectOrCreate?: UserFavoriteHorsesCreateOrConnectWithoutHorseInput | UserFavoriteHorsesCreateOrConnectWithoutHorseInput[]
    createMany?: UserFavoriteHorsesCreateManyHorseInputEnvelope
    connect?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutHorsesNestedInput = {
    create?: XOR<UserCreateWithoutHorsesInput, UserUncheckedCreateWithoutHorsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHorsesInput
    upsert?: UserUpsertWithoutHorsesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHorsesInput, UserUpdateWithoutHorsesInput>, UserUncheckedUpdateWithoutHorsesInput>
  }

  export type HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput = {
    create?: XOR<HorseCategoryCreateWithoutHorsesInput, HorseCategoryUncheckedCreateWithoutHorsesInput>
    connectOrCreate?: HorseCategoryCreateOrConnectWithoutHorsesInput
    upsert?: HorseCategoryUpsertWithoutHorsesInput
    connect?: HorseCategoryWhereUniqueInput
    update?: XOR<XOR<HorseCategoryUpdateToOneWithWhereWithoutHorsesInput, HorseCategoryUpdateWithoutHorsesInput>, HorseCategoryUncheckedUpdateWithoutHorsesInput>
  }

  export type HorseGenderUpdateOneRequiredWithoutHorsesNestedInput = {
    create?: XOR<HorseGenderCreateWithoutHorsesInput, HorseGenderUncheckedCreateWithoutHorsesInput>
    connectOrCreate?: HorseGenderCreateOrConnectWithoutHorsesInput
    upsert?: HorseGenderUpsertWithoutHorsesInput
    connect?: HorseGenderWhereUniqueInput
    update?: XOR<XOR<HorseGenderUpdateToOneWithWhereWithoutHorsesInput, HorseGenderUpdateWithoutHorsesInput>, HorseGenderUncheckedUpdateWithoutHorsesInput>
  }

  export type HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput = {
    create?: XOR<HorseDisciplineCreateWithoutHorsesInput, HorseDisciplineUncheckedCreateWithoutHorsesInput>
    connectOrCreate?: HorseDisciplineCreateOrConnectWithoutHorsesInput
    upsert?: HorseDisciplineUpsertWithoutHorsesInput
    connect?: HorseDisciplineWhereUniqueInput
    update?: XOR<XOR<HorseDisciplineUpdateToOneWithWhereWithoutHorsesInput, HorseDisciplineUpdateWithoutHorsesInput>, HorseDisciplineUncheckedUpdateWithoutHorsesInput>
  }

  export type HorseImageUpdateManyWithoutHorseNestedInput = {
    create?: XOR<HorseImageCreateWithoutHorseInput, HorseImageUncheckedCreateWithoutHorseInput> | HorseImageCreateWithoutHorseInput[] | HorseImageUncheckedCreateWithoutHorseInput[]
    connectOrCreate?: HorseImageCreateOrConnectWithoutHorseInput | HorseImageCreateOrConnectWithoutHorseInput[]
    upsert?: HorseImageUpsertWithWhereUniqueWithoutHorseInput | HorseImageUpsertWithWhereUniqueWithoutHorseInput[]
    createMany?: HorseImageCreateManyHorseInputEnvelope
    set?: HorseImageWhereUniqueInput | HorseImageWhereUniqueInput[]
    disconnect?: HorseImageWhereUniqueInput | HorseImageWhereUniqueInput[]
    delete?: HorseImageWhereUniqueInput | HorseImageWhereUniqueInput[]
    connect?: HorseImageWhereUniqueInput | HorseImageWhereUniqueInput[]
    update?: HorseImageUpdateWithWhereUniqueWithoutHorseInput | HorseImageUpdateWithWhereUniqueWithoutHorseInput[]
    updateMany?: HorseImageUpdateManyWithWhereWithoutHorseInput | HorseImageUpdateManyWithWhereWithoutHorseInput[]
    deleteMany?: HorseImageScalarWhereInput | HorseImageScalarWhereInput[]
  }

  export type HorseVetReportUpdateOneWithoutHorseNestedInput = {
    create?: XOR<HorseVetReportCreateWithoutHorseInput, HorseVetReportUncheckedCreateWithoutHorseInput>
    connectOrCreate?: HorseVetReportCreateOrConnectWithoutHorseInput
    upsert?: HorseVetReportUpsertWithoutHorseInput
    disconnect?: HorseVetReportWhereInput | boolean
    delete?: HorseVetReportWhereInput | boolean
    connect?: HorseVetReportWhereUniqueInput
    update?: XOR<XOR<HorseVetReportUpdateToOneWithWhereWithoutHorseInput, HorseVetReportUpdateWithoutHorseInput>, HorseVetReportUncheckedUpdateWithoutHorseInput>
  }

  export type HorseXrayResultsUpdateOneWithoutHorseNestedInput = {
    create?: XOR<HorseXrayResultsCreateWithoutHorseInput, HorseXrayResultsUncheckedCreateWithoutHorseInput>
    connectOrCreate?: HorseXrayResultsCreateOrConnectWithoutHorseInput
    upsert?: HorseXrayResultsUpsertWithoutHorseInput
    disconnect?: HorseXrayResultsWhereInput | boolean
    delete?: HorseXrayResultsWhereInput | boolean
    connect?: HorseXrayResultsWhereUniqueInput
    update?: XOR<XOR<HorseXrayResultsUpdateToOneWithWhereWithoutHorseInput, HorseXrayResultsUpdateWithoutHorseInput>, HorseXrayResultsUncheckedUpdateWithoutHorseInput>
  }

  export type UserFavoriteHorsesUpdateManyWithoutHorseNestedInput = {
    create?: XOR<UserFavoriteHorsesCreateWithoutHorseInput, UserFavoriteHorsesUncheckedCreateWithoutHorseInput> | UserFavoriteHorsesCreateWithoutHorseInput[] | UserFavoriteHorsesUncheckedCreateWithoutHorseInput[]
    connectOrCreate?: UserFavoriteHorsesCreateOrConnectWithoutHorseInput | UserFavoriteHorsesCreateOrConnectWithoutHorseInput[]
    upsert?: UserFavoriteHorsesUpsertWithWhereUniqueWithoutHorseInput | UserFavoriteHorsesUpsertWithWhereUniqueWithoutHorseInput[]
    createMany?: UserFavoriteHorsesCreateManyHorseInputEnvelope
    set?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    disconnect?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    delete?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    connect?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    update?: UserFavoriteHorsesUpdateWithWhereUniqueWithoutHorseInput | UserFavoriteHorsesUpdateWithWhereUniqueWithoutHorseInput[]
    updateMany?: UserFavoriteHorsesUpdateManyWithWhereWithoutHorseInput | UserFavoriteHorsesUpdateManyWithWhereWithoutHorseInput[]
    deleteMany?: UserFavoriteHorsesScalarWhereInput | UserFavoriteHorsesScalarWhereInput[]
  }

  export type HorseImageUncheckedUpdateManyWithoutHorseNestedInput = {
    create?: XOR<HorseImageCreateWithoutHorseInput, HorseImageUncheckedCreateWithoutHorseInput> | HorseImageCreateWithoutHorseInput[] | HorseImageUncheckedCreateWithoutHorseInput[]
    connectOrCreate?: HorseImageCreateOrConnectWithoutHorseInput | HorseImageCreateOrConnectWithoutHorseInput[]
    upsert?: HorseImageUpsertWithWhereUniqueWithoutHorseInput | HorseImageUpsertWithWhereUniqueWithoutHorseInput[]
    createMany?: HorseImageCreateManyHorseInputEnvelope
    set?: HorseImageWhereUniqueInput | HorseImageWhereUniqueInput[]
    disconnect?: HorseImageWhereUniqueInput | HorseImageWhereUniqueInput[]
    delete?: HorseImageWhereUniqueInput | HorseImageWhereUniqueInput[]
    connect?: HorseImageWhereUniqueInput | HorseImageWhereUniqueInput[]
    update?: HorseImageUpdateWithWhereUniqueWithoutHorseInput | HorseImageUpdateWithWhereUniqueWithoutHorseInput[]
    updateMany?: HorseImageUpdateManyWithWhereWithoutHorseInput | HorseImageUpdateManyWithWhereWithoutHorseInput[]
    deleteMany?: HorseImageScalarWhereInput | HorseImageScalarWhereInput[]
  }

  export type HorseVetReportUncheckedUpdateOneWithoutHorseNestedInput = {
    create?: XOR<HorseVetReportCreateWithoutHorseInput, HorseVetReportUncheckedCreateWithoutHorseInput>
    connectOrCreate?: HorseVetReportCreateOrConnectWithoutHorseInput
    upsert?: HorseVetReportUpsertWithoutHorseInput
    disconnect?: HorseVetReportWhereInput | boolean
    delete?: HorseVetReportWhereInput | boolean
    connect?: HorseVetReportWhereUniqueInput
    update?: XOR<XOR<HorseVetReportUpdateToOneWithWhereWithoutHorseInput, HorseVetReportUpdateWithoutHorseInput>, HorseVetReportUncheckedUpdateWithoutHorseInput>
  }

  export type HorseXrayResultsUncheckedUpdateOneWithoutHorseNestedInput = {
    create?: XOR<HorseXrayResultsCreateWithoutHorseInput, HorseXrayResultsUncheckedCreateWithoutHorseInput>
    connectOrCreate?: HorseXrayResultsCreateOrConnectWithoutHorseInput
    upsert?: HorseXrayResultsUpsertWithoutHorseInput
    disconnect?: HorseXrayResultsWhereInput | boolean
    delete?: HorseXrayResultsWhereInput | boolean
    connect?: HorseXrayResultsWhereUniqueInput
    update?: XOR<XOR<HorseXrayResultsUpdateToOneWithWhereWithoutHorseInput, HorseXrayResultsUpdateWithoutHorseInput>, HorseXrayResultsUncheckedUpdateWithoutHorseInput>
  }

  export type UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput = {
    create?: XOR<UserFavoriteHorsesCreateWithoutHorseInput, UserFavoriteHorsesUncheckedCreateWithoutHorseInput> | UserFavoriteHorsesCreateWithoutHorseInput[] | UserFavoriteHorsesUncheckedCreateWithoutHorseInput[]
    connectOrCreate?: UserFavoriteHorsesCreateOrConnectWithoutHorseInput | UserFavoriteHorsesCreateOrConnectWithoutHorseInput[]
    upsert?: UserFavoriteHorsesUpsertWithWhereUniqueWithoutHorseInput | UserFavoriteHorsesUpsertWithWhereUniqueWithoutHorseInput[]
    createMany?: UserFavoriteHorsesCreateManyHorseInputEnvelope
    set?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    disconnect?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    delete?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    connect?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    update?: UserFavoriteHorsesUpdateWithWhereUniqueWithoutHorseInput | UserFavoriteHorsesUpdateWithWhereUniqueWithoutHorseInput[]
    updateMany?: UserFavoriteHorsesUpdateManyWithWhereWithoutHorseInput | UserFavoriteHorsesUpdateManyWithWhereWithoutHorseInput[]
    deleteMany?: UserFavoriteHorsesScalarWhereInput | UserFavoriteHorsesScalarWhereInput[]
  }

  export type HorseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<HorseCreateWithoutCategoryInput, HorseUncheckedCreateWithoutCategoryInput> | HorseCreateWithoutCategoryInput[] | HorseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutCategoryInput | HorseCreateOrConnectWithoutCategoryInput[]
    createMany?: HorseCreateManyCategoryInputEnvelope
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
  }

  export type HorseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<HorseCreateWithoutCategoryInput, HorseUncheckedCreateWithoutCategoryInput> | HorseCreateWithoutCategoryInput[] | HorseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutCategoryInput | HorseCreateOrConnectWithoutCategoryInput[]
    createMany?: HorseCreateManyCategoryInputEnvelope
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
  }

  export type HorseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<HorseCreateWithoutCategoryInput, HorseUncheckedCreateWithoutCategoryInput> | HorseCreateWithoutCategoryInput[] | HorseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutCategoryInput | HorseCreateOrConnectWithoutCategoryInput[]
    upsert?: HorseUpsertWithWhereUniqueWithoutCategoryInput | HorseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: HorseCreateManyCategoryInputEnvelope
    set?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    disconnect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    delete?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    update?: HorseUpdateWithWhereUniqueWithoutCategoryInput | HorseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: HorseUpdateManyWithWhereWithoutCategoryInput | HorseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: HorseScalarWhereInput | HorseScalarWhereInput[]
  }

  export type HorseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<HorseCreateWithoutCategoryInput, HorseUncheckedCreateWithoutCategoryInput> | HorseCreateWithoutCategoryInput[] | HorseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutCategoryInput | HorseCreateOrConnectWithoutCategoryInput[]
    upsert?: HorseUpsertWithWhereUniqueWithoutCategoryInput | HorseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: HorseCreateManyCategoryInputEnvelope
    set?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    disconnect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    delete?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    update?: HorseUpdateWithWhereUniqueWithoutCategoryInput | HorseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: HorseUpdateManyWithWhereWithoutCategoryInput | HorseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: HorseScalarWhereInput | HorseScalarWhereInput[]
  }

  export type HorseCreateNestedManyWithoutGenderInput = {
    create?: XOR<HorseCreateWithoutGenderInput, HorseUncheckedCreateWithoutGenderInput> | HorseCreateWithoutGenderInput[] | HorseUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutGenderInput | HorseCreateOrConnectWithoutGenderInput[]
    createMany?: HorseCreateManyGenderInputEnvelope
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
  }

  export type HorseUncheckedCreateNestedManyWithoutGenderInput = {
    create?: XOR<HorseCreateWithoutGenderInput, HorseUncheckedCreateWithoutGenderInput> | HorseCreateWithoutGenderInput[] | HorseUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutGenderInput | HorseCreateOrConnectWithoutGenderInput[]
    createMany?: HorseCreateManyGenderInputEnvelope
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
  }

  export type HorseUpdateManyWithoutGenderNestedInput = {
    create?: XOR<HorseCreateWithoutGenderInput, HorseUncheckedCreateWithoutGenderInput> | HorseCreateWithoutGenderInput[] | HorseUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutGenderInput | HorseCreateOrConnectWithoutGenderInput[]
    upsert?: HorseUpsertWithWhereUniqueWithoutGenderInput | HorseUpsertWithWhereUniqueWithoutGenderInput[]
    createMany?: HorseCreateManyGenderInputEnvelope
    set?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    disconnect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    delete?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    update?: HorseUpdateWithWhereUniqueWithoutGenderInput | HorseUpdateWithWhereUniqueWithoutGenderInput[]
    updateMany?: HorseUpdateManyWithWhereWithoutGenderInput | HorseUpdateManyWithWhereWithoutGenderInput[]
    deleteMany?: HorseScalarWhereInput | HorseScalarWhereInput[]
  }

  export type HorseUncheckedUpdateManyWithoutGenderNestedInput = {
    create?: XOR<HorseCreateWithoutGenderInput, HorseUncheckedCreateWithoutGenderInput> | HorseCreateWithoutGenderInput[] | HorseUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutGenderInput | HorseCreateOrConnectWithoutGenderInput[]
    upsert?: HorseUpsertWithWhereUniqueWithoutGenderInput | HorseUpsertWithWhereUniqueWithoutGenderInput[]
    createMany?: HorseCreateManyGenderInputEnvelope
    set?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    disconnect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    delete?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    update?: HorseUpdateWithWhereUniqueWithoutGenderInput | HorseUpdateWithWhereUniqueWithoutGenderInput[]
    updateMany?: HorseUpdateManyWithWhereWithoutGenderInput | HorseUpdateManyWithWhereWithoutGenderInput[]
    deleteMany?: HorseScalarWhereInput | HorseScalarWhereInput[]
  }

  export type HorseCreateNestedOneWithoutImagesInput = {
    create?: XOR<HorseCreateWithoutImagesInput, HorseUncheckedCreateWithoutImagesInput>
    connectOrCreate?: HorseCreateOrConnectWithoutImagesInput
    connect?: HorseWhereUniqueInput
  }

  export type HorseUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<HorseCreateWithoutImagesInput, HorseUncheckedCreateWithoutImagesInput>
    connectOrCreate?: HorseCreateOrConnectWithoutImagesInput
    upsert?: HorseUpsertWithoutImagesInput
    connect?: HorseWhereUniqueInput
    update?: XOR<XOR<HorseUpdateToOneWithWhereWithoutImagesInput, HorseUpdateWithoutImagesInput>, HorseUncheckedUpdateWithoutImagesInput>
  }

  export type HorseCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<HorseCreateWithoutDisciplineInput, HorseUncheckedCreateWithoutDisciplineInput> | HorseCreateWithoutDisciplineInput[] | HorseUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutDisciplineInput | HorseCreateOrConnectWithoutDisciplineInput[]
    createMany?: HorseCreateManyDisciplineInputEnvelope
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
  }

  export type HorseUncheckedCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<HorseCreateWithoutDisciplineInput, HorseUncheckedCreateWithoutDisciplineInput> | HorseCreateWithoutDisciplineInput[] | HorseUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutDisciplineInput | HorseCreateOrConnectWithoutDisciplineInput[]
    createMany?: HorseCreateManyDisciplineInputEnvelope
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
  }

  export type HorseUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<HorseCreateWithoutDisciplineInput, HorseUncheckedCreateWithoutDisciplineInput> | HorseCreateWithoutDisciplineInput[] | HorseUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutDisciplineInput | HorseCreateOrConnectWithoutDisciplineInput[]
    upsert?: HorseUpsertWithWhereUniqueWithoutDisciplineInput | HorseUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: HorseCreateManyDisciplineInputEnvelope
    set?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    disconnect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    delete?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    update?: HorseUpdateWithWhereUniqueWithoutDisciplineInput | HorseUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: HorseUpdateManyWithWhereWithoutDisciplineInput | HorseUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: HorseScalarWhereInput | HorseScalarWhereInput[]
  }

  export type HorseUncheckedUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<HorseCreateWithoutDisciplineInput, HorseUncheckedCreateWithoutDisciplineInput> | HorseCreateWithoutDisciplineInput[] | HorseUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutDisciplineInput | HorseCreateOrConnectWithoutDisciplineInput[]
    upsert?: HorseUpsertWithWhereUniqueWithoutDisciplineInput | HorseUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: HorseCreateManyDisciplineInputEnvelope
    set?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    disconnect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    delete?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    update?: HorseUpdateWithWhereUniqueWithoutDisciplineInput | HorseUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: HorseUpdateManyWithWhereWithoutDisciplineInput | HorseUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: HorseScalarWhereInput | HorseScalarWhereInput[]
  }

  export type HorseCreateNestedOneWithoutVetReportInput = {
    create?: XOR<HorseCreateWithoutVetReportInput, HorseUncheckedCreateWithoutVetReportInput>
    connectOrCreate?: HorseCreateOrConnectWithoutVetReportInput
    connect?: HorseWhereUniqueInput
  }

  export type HorseUpdateOneRequiredWithoutVetReportNestedInput = {
    create?: XOR<HorseCreateWithoutVetReportInput, HorseUncheckedCreateWithoutVetReportInput>
    connectOrCreate?: HorseCreateOrConnectWithoutVetReportInput
    upsert?: HorseUpsertWithoutVetReportInput
    connect?: HorseWhereUniqueInput
    update?: XOR<XOR<HorseUpdateToOneWithWhereWithoutVetReportInput, HorseUpdateWithoutVetReportInput>, HorseUncheckedUpdateWithoutVetReportInput>
  }

  export type HorseCreateNestedOneWithoutXrayResultsInput = {
    create?: XOR<HorseCreateWithoutXrayResultsInput, HorseUncheckedCreateWithoutXrayResultsInput>
    connectOrCreate?: HorseCreateOrConnectWithoutXrayResultsInput
    connect?: HorseWhereUniqueInput
  }

  export type HorseUpdateOneRequiredWithoutXrayResultsNestedInput = {
    create?: XOR<HorseCreateWithoutXrayResultsInput, HorseUncheckedCreateWithoutXrayResultsInput>
    connectOrCreate?: HorseCreateOrConnectWithoutXrayResultsInput
    upsert?: HorseUpsertWithoutXrayResultsInput
    connect?: HorseWhereUniqueInput
    update?: XOR<XOR<HorseUpdateToOneWithWhereWithoutXrayResultsInput, HorseUpdateWithoutXrayResultsInput>, HorseUncheckedUpdateWithoutXrayResultsInput>
  }

  export type UserFavoriteHorsesCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavoriteHorsesCreateWithoutUserInput, UserFavoriteHorsesUncheckedCreateWithoutUserInput> | UserFavoriteHorsesCreateWithoutUserInput[] | UserFavoriteHorsesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteHorsesCreateOrConnectWithoutUserInput | UserFavoriteHorsesCreateOrConnectWithoutUserInput[]
    createMany?: UserFavoriteHorsesCreateManyUserInputEnvelope
    connect?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type HorseCreateNestedManyWithoutUserInput = {
    create?: XOR<HorseCreateWithoutUserInput, HorseUncheckedCreateWithoutUserInput> | HorseCreateWithoutUserInput[] | HorseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutUserInput | HorseCreateOrConnectWithoutUserInput[]
    createMany?: HorseCreateManyUserInputEnvelope
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
  }

  export type UserReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput> | UserReviewCreateWithoutUserInput[] | UserReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutUserInput | UserReviewCreateOrConnectWithoutUserInput[]
    createMany?: UserReviewCreateManyUserInputEnvelope
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
  }

  export type UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavoriteHorsesCreateWithoutUserInput, UserFavoriteHorsesUncheckedCreateWithoutUserInput> | UserFavoriteHorsesCreateWithoutUserInput[] | UserFavoriteHorsesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteHorsesCreateOrConnectWithoutUserInput | UserFavoriteHorsesCreateOrConnectWithoutUserInput[]
    createMany?: UserFavoriteHorsesCreateManyUserInputEnvelope
    connect?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type HorseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HorseCreateWithoutUserInput, HorseUncheckedCreateWithoutUserInput> | HorseCreateWithoutUserInput[] | HorseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutUserInput | HorseCreateOrConnectWithoutUserInput[]
    createMany?: HorseCreateManyUserInputEnvelope
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
  }

  export type UserReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput> | UserReviewCreateWithoutUserInput[] | UserReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutUserInput | UserReviewCreateOrConnectWithoutUserInput[]
    createMany?: UserReviewCreateManyUserInputEnvelope
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
  }

  export type UserFavoriteHorsesUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavoriteHorsesCreateWithoutUserInput, UserFavoriteHorsesUncheckedCreateWithoutUserInput> | UserFavoriteHorsesCreateWithoutUserInput[] | UserFavoriteHorsesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteHorsesCreateOrConnectWithoutUserInput | UserFavoriteHorsesCreateOrConnectWithoutUserInput[]
    upsert?: UserFavoriteHorsesUpsertWithWhereUniqueWithoutUserInput | UserFavoriteHorsesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavoriteHorsesCreateManyUserInputEnvelope
    set?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    disconnect?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    delete?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    connect?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    update?: UserFavoriteHorsesUpdateWithWhereUniqueWithoutUserInput | UserFavoriteHorsesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavoriteHorsesUpdateManyWithWhereWithoutUserInput | UserFavoriteHorsesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavoriteHorsesScalarWhereInput | UserFavoriteHorsesScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type HorseUpdateManyWithoutUserNestedInput = {
    create?: XOR<HorseCreateWithoutUserInput, HorseUncheckedCreateWithoutUserInput> | HorseCreateWithoutUserInput[] | HorseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutUserInput | HorseCreateOrConnectWithoutUserInput[]
    upsert?: HorseUpsertWithWhereUniqueWithoutUserInput | HorseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HorseCreateManyUserInputEnvelope
    set?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    disconnect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    delete?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    update?: HorseUpdateWithWhereUniqueWithoutUserInput | HorseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HorseUpdateManyWithWhereWithoutUserInput | HorseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HorseScalarWhereInput | HorseScalarWhereInput[]
  }

  export type UserReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput> | UserReviewCreateWithoutUserInput[] | UserReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutUserInput | UserReviewCreateOrConnectWithoutUserInput[]
    upsert?: UserReviewUpsertWithWhereUniqueWithoutUserInput | UserReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserReviewCreateManyUserInputEnvelope
    set?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    disconnect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    delete?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    update?: UserReviewUpdateWithWhereUniqueWithoutUserInput | UserReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserReviewUpdateManyWithWhereWithoutUserInput | UserReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
  }

  export type UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavoriteHorsesCreateWithoutUserInput, UserFavoriteHorsesUncheckedCreateWithoutUserInput> | UserFavoriteHorsesCreateWithoutUserInput[] | UserFavoriteHorsesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteHorsesCreateOrConnectWithoutUserInput | UserFavoriteHorsesCreateOrConnectWithoutUserInput[]
    upsert?: UserFavoriteHorsesUpsertWithWhereUniqueWithoutUserInput | UserFavoriteHorsesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavoriteHorsesCreateManyUserInputEnvelope
    set?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    disconnect?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    delete?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    connect?: UserFavoriteHorsesWhereUniqueInput | UserFavoriteHorsesWhereUniqueInput[]
    update?: UserFavoriteHorsesUpdateWithWhereUniqueWithoutUserInput | UserFavoriteHorsesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavoriteHorsesUpdateManyWithWhereWithoutUserInput | UserFavoriteHorsesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavoriteHorsesScalarWhereInput | UserFavoriteHorsesScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type HorseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HorseCreateWithoutUserInput, HorseUncheckedCreateWithoutUserInput> | HorseCreateWithoutUserInput[] | HorseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HorseCreateOrConnectWithoutUserInput | HorseCreateOrConnectWithoutUserInput[]
    upsert?: HorseUpsertWithWhereUniqueWithoutUserInput | HorseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HorseCreateManyUserInputEnvelope
    set?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    disconnect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    delete?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    connect?: HorseWhereUniqueInput | HorseWhereUniqueInput[]
    update?: HorseUpdateWithWhereUniqueWithoutUserInput | HorseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HorseUpdateManyWithWhereWithoutUserInput | HorseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HorseScalarWhereInput | HorseScalarWhereInput[]
  }

  export type UserReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput> | UserReviewCreateWithoutUserInput[] | UserReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutUserInput | UserReviewCreateOrConnectWithoutUserInput[]
    upsert?: UserReviewUpsertWithWhereUniqueWithoutUserInput | UserReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserReviewCreateManyUserInputEnvelope
    set?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    disconnect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    delete?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    update?: UserReviewUpdateWithWhereUniqueWithoutUserInput | UserReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserReviewUpdateManyWithWhereWithoutUserInput | UserReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserFavoriteHorsesInput = {
    create?: XOR<UserCreateWithoutUserFavoriteHorsesInput, UserUncheckedCreateWithoutUserFavoriteHorsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFavoriteHorsesInput
    connect?: UserWhereUniqueInput
  }

  export type HorseCreateNestedOneWithoutFavoriteByUsersInput = {
    create?: XOR<HorseCreateWithoutFavoriteByUsersInput, HorseUncheckedCreateWithoutFavoriteByUsersInput>
    connectOrCreate?: HorseCreateOrConnectWithoutFavoriteByUsersInput
    connect?: HorseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserFavoriteHorsesNestedInput = {
    create?: XOR<UserCreateWithoutUserFavoriteHorsesInput, UserUncheckedCreateWithoutUserFavoriteHorsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFavoriteHorsesInput
    upsert?: UserUpsertWithoutUserFavoriteHorsesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserFavoriteHorsesInput, UserUpdateWithoutUserFavoriteHorsesInput>, UserUncheckedUpdateWithoutUserFavoriteHorsesInput>
  }

  export type HorseUpdateOneRequiredWithoutFavoriteByUsersNestedInput = {
    create?: XOR<HorseCreateWithoutFavoriteByUsersInput, HorseUncheckedCreateWithoutFavoriteByUsersInput>
    connectOrCreate?: HorseCreateOrConnectWithoutFavoriteByUsersInput
    upsert?: HorseUpsertWithoutFavoriteByUsersInput
    connect?: HorseWhereUniqueInput
    update?: XOR<XOR<HorseUpdateToOneWithWhereWithoutFavoriteByUsersInput, HorseUpdateWithoutFavoriteByUsersInput>, HorseUncheckedUpdateWithoutFavoriteByUsersInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserCreateWithoutHorsesInput = {
    id?: string
    name: string
    firebaseUid: string
    phoneNumber?: string | null
    email?: string | null
    whatsAppNumber?: string | null
    verifiedSeller?: boolean
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userFavoriteHorses?: UserFavoriteHorsesCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: UserReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHorsesInput = {
    id?: string
    name: string
    firebaseUid: string
    phoneNumber?: string | null
    email?: string | null
    whatsAppNumber?: string | null
    verifiedSeller?: boolean
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userFavoriteHorses?: UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: UserReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHorsesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHorsesInput, UserUncheckedCreateWithoutHorsesInput>
  }

  export type HorseCategoryCreateWithoutHorsesInput = {
    id?: string
    name: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseCategoryUncheckedCreateWithoutHorsesInput = {
    id?: string
    name: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseCategoryCreateOrConnectWithoutHorsesInput = {
    where: HorseCategoryWhereUniqueInput
    create: XOR<HorseCategoryCreateWithoutHorsesInput, HorseCategoryUncheckedCreateWithoutHorsesInput>
  }

  export type HorseGenderCreateWithoutHorsesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseGenderUncheckedCreateWithoutHorsesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseGenderCreateOrConnectWithoutHorsesInput = {
    where: HorseGenderWhereUniqueInput
    create: XOR<HorseGenderCreateWithoutHorsesInput, HorseGenderUncheckedCreateWithoutHorsesInput>
  }

  export type HorseDisciplineCreateWithoutHorsesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseDisciplineUncheckedCreateWithoutHorsesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseDisciplineCreateOrConnectWithoutHorsesInput = {
    where: HorseDisciplineWhereUniqueInput
    create: XOR<HorseDisciplineCreateWithoutHorsesInput, HorseDisciplineUncheckedCreateWithoutHorsesInput>
  }

  export type HorseImageCreateWithoutHorseInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseImageUncheckedCreateWithoutHorseInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseImageCreateOrConnectWithoutHorseInput = {
    where: HorseImageWhereUniqueInput
    create: XOR<HorseImageCreateWithoutHorseInput, HorseImageUncheckedCreateWithoutHorseInput>
  }

  export type HorseImageCreateManyHorseInputEnvelope = {
    data: HorseImageCreateManyHorseInput | HorseImageCreateManyHorseInput[]
  }

  export type HorseVetReportCreateWithoutHorseInput = {
    id?: string
    reportUrl: string
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseVetReportUncheckedCreateWithoutHorseInput = {
    id?: string
    reportUrl: string
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseVetReportCreateOrConnectWithoutHorseInput = {
    where: HorseVetReportWhereUniqueInput
    create: XOR<HorseVetReportCreateWithoutHorseInput, HorseVetReportUncheckedCreateWithoutHorseInput>
  }

  export type HorseXrayResultsCreateWithoutHorseInput = {
    id?: string
    xrayUrl: string
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseXrayResultsUncheckedCreateWithoutHorseInput = {
    id?: string
    xrayUrl: string
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseXrayResultsCreateOrConnectWithoutHorseInput = {
    where: HorseXrayResultsWhereUniqueInput
    create: XOR<HorseXrayResultsCreateWithoutHorseInput, HorseXrayResultsUncheckedCreateWithoutHorseInput>
  }

  export type UserFavoriteHorsesCreateWithoutHorseInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserFavoriteHorsesInput
  }

  export type UserFavoriteHorsesUncheckedCreateWithoutHorseInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type UserFavoriteHorsesCreateOrConnectWithoutHorseInput = {
    where: UserFavoriteHorsesWhereUniqueInput
    create: XOR<UserFavoriteHorsesCreateWithoutHorseInput, UserFavoriteHorsesUncheckedCreateWithoutHorseInput>
  }

  export type UserFavoriteHorsesCreateManyHorseInputEnvelope = {
    data: UserFavoriteHorsesCreateManyHorseInput | UserFavoriteHorsesCreateManyHorseInput[]
  }

  export type UserUpsertWithoutHorsesInput = {
    update: XOR<UserUpdateWithoutHorsesInput, UserUncheckedUpdateWithoutHorsesInput>
    create: XOR<UserCreateWithoutHorsesInput, UserUncheckedCreateWithoutHorsesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHorsesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHorsesInput, UserUncheckedUpdateWithoutHorsesInput>
  }

  export type UserUpdateWithoutHorsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedSeller?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFavoriteHorses?: UserFavoriteHorsesUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHorsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedSeller?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFavoriteHorses?: UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HorseCategoryUpsertWithoutHorsesInput = {
    update: XOR<HorseCategoryUpdateWithoutHorsesInput, HorseCategoryUncheckedUpdateWithoutHorsesInput>
    create: XOR<HorseCategoryCreateWithoutHorsesInput, HorseCategoryUncheckedCreateWithoutHorsesInput>
    where?: HorseCategoryWhereInput
  }

  export type HorseCategoryUpdateToOneWithWhereWithoutHorsesInput = {
    where?: HorseCategoryWhereInput
    data: XOR<HorseCategoryUpdateWithoutHorsesInput, HorseCategoryUncheckedUpdateWithoutHorsesInput>
  }

  export type HorseCategoryUpdateWithoutHorsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseCategoryUncheckedUpdateWithoutHorsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseGenderUpsertWithoutHorsesInput = {
    update: XOR<HorseGenderUpdateWithoutHorsesInput, HorseGenderUncheckedUpdateWithoutHorsesInput>
    create: XOR<HorseGenderCreateWithoutHorsesInput, HorseGenderUncheckedCreateWithoutHorsesInput>
    where?: HorseGenderWhereInput
  }

  export type HorseGenderUpdateToOneWithWhereWithoutHorsesInput = {
    where?: HorseGenderWhereInput
    data: XOR<HorseGenderUpdateWithoutHorsesInput, HorseGenderUncheckedUpdateWithoutHorsesInput>
  }

  export type HorseGenderUpdateWithoutHorsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseGenderUncheckedUpdateWithoutHorsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseDisciplineUpsertWithoutHorsesInput = {
    update: XOR<HorseDisciplineUpdateWithoutHorsesInput, HorseDisciplineUncheckedUpdateWithoutHorsesInput>
    create: XOR<HorseDisciplineCreateWithoutHorsesInput, HorseDisciplineUncheckedCreateWithoutHorsesInput>
    where?: HorseDisciplineWhereInput
  }

  export type HorseDisciplineUpdateToOneWithWhereWithoutHorsesInput = {
    where?: HorseDisciplineWhereInput
    data: XOR<HorseDisciplineUpdateWithoutHorsesInput, HorseDisciplineUncheckedUpdateWithoutHorsesInput>
  }

  export type HorseDisciplineUpdateWithoutHorsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseDisciplineUncheckedUpdateWithoutHorsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseImageUpsertWithWhereUniqueWithoutHorseInput = {
    where: HorseImageWhereUniqueInput
    update: XOR<HorseImageUpdateWithoutHorseInput, HorseImageUncheckedUpdateWithoutHorseInput>
    create: XOR<HorseImageCreateWithoutHorseInput, HorseImageUncheckedCreateWithoutHorseInput>
  }

  export type HorseImageUpdateWithWhereUniqueWithoutHorseInput = {
    where: HorseImageWhereUniqueInput
    data: XOR<HorseImageUpdateWithoutHorseInput, HorseImageUncheckedUpdateWithoutHorseInput>
  }

  export type HorseImageUpdateManyWithWhereWithoutHorseInput = {
    where: HorseImageScalarWhereInput
    data: XOR<HorseImageUpdateManyMutationInput, HorseImageUncheckedUpdateManyWithoutHorseInput>
  }

  export type HorseImageScalarWhereInput = {
    AND?: HorseImageScalarWhereInput | HorseImageScalarWhereInput[]
    OR?: HorseImageScalarWhereInput[]
    NOT?: HorseImageScalarWhereInput | HorseImageScalarWhereInput[]
    id?: StringFilter<"HorseImage"> | string
    url?: StringFilter<"HorseImage"> | string
    createdAt?: DateTimeFilter<"HorseImage"> | Date | string
    updatedAt?: DateTimeFilter<"HorseImage"> | Date | string
    horseId?: StringFilter<"HorseImage"> | string
  }

  export type HorseVetReportUpsertWithoutHorseInput = {
    update: XOR<HorseVetReportUpdateWithoutHorseInput, HorseVetReportUncheckedUpdateWithoutHorseInput>
    create: XOR<HorseVetReportCreateWithoutHorseInput, HorseVetReportUncheckedCreateWithoutHorseInput>
    where?: HorseVetReportWhereInput
  }

  export type HorseVetReportUpdateToOneWithWhereWithoutHorseInput = {
    where?: HorseVetReportWhereInput
    data: XOR<HorseVetReportUpdateWithoutHorseInput, HorseVetReportUncheckedUpdateWithoutHorseInput>
  }

  export type HorseVetReportUpdateWithoutHorseInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportUrl?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseVetReportUncheckedUpdateWithoutHorseInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportUrl?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseXrayResultsUpsertWithoutHorseInput = {
    update: XOR<HorseXrayResultsUpdateWithoutHorseInput, HorseXrayResultsUncheckedUpdateWithoutHorseInput>
    create: XOR<HorseXrayResultsCreateWithoutHorseInput, HorseXrayResultsUncheckedCreateWithoutHorseInput>
    where?: HorseXrayResultsWhereInput
  }

  export type HorseXrayResultsUpdateToOneWithWhereWithoutHorseInput = {
    where?: HorseXrayResultsWhereInput
    data: XOR<HorseXrayResultsUpdateWithoutHorseInput, HorseXrayResultsUncheckedUpdateWithoutHorseInput>
  }

  export type HorseXrayResultsUpdateWithoutHorseInput = {
    id?: StringFieldUpdateOperationsInput | string
    xrayUrl?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseXrayResultsUncheckedUpdateWithoutHorseInput = {
    id?: StringFieldUpdateOperationsInput | string
    xrayUrl?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteHorsesUpsertWithWhereUniqueWithoutHorseInput = {
    where: UserFavoriteHorsesWhereUniqueInput
    update: XOR<UserFavoriteHorsesUpdateWithoutHorseInput, UserFavoriteHorsesUncheckedUpdateWithoutHorseInput>
    create: XOR<UserFavoriteHorsesCreateWithoutHorseInput, UserFavoriteHorsesUncheckedCreateWithoutHorseInput>
  }

  export type UserFavoriteHorsesUpdateWithWhereUniqueWithoutHorseInput = {
    where: UserFavoriteHorsesWhereUniqueInput
    data: XOR<UserFavoriteHorsesUpdateWithoutHorseInput, UserFavoriteHorsesUncheckedUpdateWithoutHorseInput>
  }

  export type UserFavoriteHorsesUpdateManyWithWhereWithoutHorseInput = {
    where: UserFavoriteHorsesScalarWhereInput
    data: XOR<UserFavoriteHorsesUpdateManyMutationInput, UserFavoriteHorsesUncheckedUpdateManyWithoutHorseInput>
  }

  export type UserFavoriteHorsesScalarWhereInput = {
    AND?: UserFavoriteHorsesScalarWhereInput | UserFavoriteHorsesScalarWhereInput[]
    OR?: UserFavoriteHorsesScalarWhereInput[]
    NOT?: UserFavoriteHorsesScalarWhereInput | UserFavoriteHorsesScalarWhereInput[]
    id?: StringFilter<"UserFavoriteHorses"> | string
    userId?: StringFilter<"UserFavoriteHorses"> | string
    horseId?: StringFilter<"UserFavoriteHorses"> | string
    createdAt?: DateTimeFilter<"UserFavoriteHorses"> | Date | string
  }

  export type HorseCreateWithoutCategoryInput = {
    id?: string
    name: string
    pedigree?: string | null
    age: number
    height: number
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHorsesInput
    gender: HorseGenderCreateNestedOneWithoutHorsesInput
    discipline: HorseDisciplineCreateNestedOneWithoutHorsesInput
    images?: HorseImageCreateNestedManyWithoutHorseInput
    vetReport?: HorseVetReportCreateNestedOneWithoutHorseInput
    xrayResults?: HorseXrayResultsCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesCreateNestedManyWithoutHorseInput
  }

  export type HorseUncheckedCreateWithoutCategoryInput = {
    id?: string
    userId: string
    name: string
    pedigree?: string | null
    age: number
    genderId: string
    height: number
    disciplineId: string
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: HorseImageUncheckedCreateNestedManyWithoutHorseInput
    vetReport?: HorseVetReportUncheckedCreateNestedOneWithoutHorseInput
    xrayResults?: HorseXrayResultsUncheckedCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput
  }

  export type HorseCreateOrConnectWithoutCategoryInput = {
    where: HorseWhereUniqueInput
    create: XOR<HorseCreateWithoutCategoryInput, HorseUncheckedCreateWithoutCategoryInput>
  }

  export type HorseCreateManyCategoryInputEnvelope = {
    data: HorseCreateManyCategoryInput | HorseCreateManyCategoryInput[]
  }

  export type HorseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: HorseWhereUniqueInput
    update: XOR<HorseUpdateWithoutCategoryInput, HorseUncheckedUpdateWithoutCategoryInput>
    create: XOR<HorseCreateWithoutCategoryInput, HorseUncheckedCreateWithoutCategoryInput>
  }

  export type HorseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: HorseWhereUniqueInput
    data: XOR<HorseUpdateWithoutCategoryInput, HorseUncheckedUpdateWithoutCategoryInput>
  }

  export type HorseUpdateManyWithWhereWithoutCategoryInput = {
    where: HorseScalarWhereInput
    data: XOR<HorseUpdateManyMutationInput, HorseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type HorseScalarWhereInput = {
    AND?: HorseScalarWhereInput | HorseScalarWhereInput[]
    OR?: HorseScalarWhereInput[]
    NOT?: HorseScalarWhereInput | HorseScalarWhereInput[]
    id?: StringFilter<"Horse"> | string
    userId?: StringFilter<"Horse"> | string
    categoryId?: StringFilter<"Horse"> | string
    name?: StringFilter<"Horse"> | string
    pedigree?: StringNullableFilter<"Horse"> | string | null
    age?: IntFilter<"Horse"> | number
    genderId?: StringFilter<"Horse"> | string
    height?: IntFilter<"Horse"> | number
    disciplineId?: StringFilter<"Horse"> | string
    location?: StringFilter<"Horse"> | string
    price?: FloatFilter<"Horse"> | number
    description?: StringFilter<"Horse"> | string
    veterinaryDocumentAvailable?: BoolFilter<"Horse"> | boolean
    xrayResultsAvailable?: BoolFilter<"Horse"> | boolean
    videoUrl?: StringNullableFilter<"Horse"> | string | null
    status?: StringFilter<"Horse"> | string
    createdAt?: DateTimeFilter<"Horse"> | Date | string
    updatedAt?: DateTimeFilter<"Horse"> | Date | string
  }

  export type HorseCreateWithoutGenderInput = {
    id?: string
    name: string
    pedigree?: string | null
    age: number
    height: number
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHorsesInput
    category: HorseCategoryCreateNestedOneWithoutHorsesInput
    discipline: HorseDisciplineCreateNestedOneWithoutHorsesInput
    images?: HorseImageCreateNestedManyWithoutHorseInput
    vetReport?: HorseVetReportCreateNestedOneWithoutHorseInput
    xrayResults?: HorseXrayResultsCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesCreateNestedManyWithoutHorseInput
  }

  export type HorseUncheckedCreateWithoutGenderInput = {
    id?: string
    userId: string
    categoryId: string
    name: string
    pedigree?: string | null
    age: number
    height: number
    disciplineId: string
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: HorseImageUncheckedCreateNestedManyWithoutHorseInput
    vetReport?: HorseVetReportUncheckedCreateNestedOneWithoutHorseInput
    xrayResults?: HorseXrayResultsUncheckedCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput
  }

  export type HorseCreateOrConnectWithoutGenderInput = {
    where: HorseWhereUniqueInput
    create: XOR<HorseCreateWithoutGenderInput, HorseUncheckedCreateWithoutGenderInput>
  }

  export type HorseCreateManyGenderInputEnvelope = {
    data: HorseCreateManyGenderInput | HorseCreateManyGenderInput[]
  }

  export type HorseUpsertWithWhereUniqueWithoutGenderInput = {
    where: HorseWhereUniqueInput
    update: XOR<HorseUpdateWithoutGenderInput, HorseUncheckedUpdateWithoutGenderInput>
    create: XOR<HorseCreateWithoutGenderInput, HorseUncheckedCreateWithoutGenderInput>
  }

  export type HorseUpdateWithWhereUniqueWithoutGenderInput = {
    where: HorseWhereUniqueInput
    data: XOR<HorseUpdateWithoutGenderInput, HorseUncheckedUpdateWithoutGenderInput>
  }

  export type HorseUpdateManyWithWhereWithoutGenderInput = {
    where: HorseScalarWhereInput
    data: XOR<HorseUpdateManyMutationInput, HorseUncheckedUpdateManyWithoutGenderInput>
  }

  export type HorseCreateWithoutImagesInput = {
    id?: string
    name: string
    pedigree?: string | null
    age: number
    height: number
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHorsesInput
    category: HorseCategoryCreateNestedOneWithoutHorsesInput
    gender: HorseGenderCreateNestedOneWithoutHorsesInput
    discipline: HorseDisciplineCreateNestedOneWithoutHorsesInput
    vetReport?: HorseVetReportCreateNestedOneWithoutHorseInput
    xrayResults?: HorseXrayResultsCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesCreateNestedManyWithoutHorseInput
  }

  export type HorseUncheckedCreateWithoutImagesInput = {
    id?: string
    userId: string
    categoryId: string
    name: string
    pedigree?: string | null
    age: number
    genderId: string
    height: number
    disciplineId: string
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vetReport?: HorseVetReportUncheckedCreateNestedOneWithoutHorseInput
    xrayResults?: HorseXrayResultsUncheckedCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput
  }

  export type HorseCreateOrConnectWithoutImagesInput = {
    where: HorseWhereUniqueInput
    create: XOR<HorseCreateWithoutImagesInput, HorseUncheckedCreateWithoutImagesInput>
  }

  export type HorseUpsertWithoutImagesInput = {
    update: XOR<HorseUpdateWithoutImagesInput, HorseUncheckedUpdateWithoutImagesInput>
    create: XOR<HorseCreateWithoutImagesInput, HorseUncheckedCreateWithoutImagesInput>
    where?: HorseWhereInput
  }

  export type HorseUpdateToOneWithWhereWithoutImagesInput = {
    where?: HorseWhereInput
    data: XOR<HorseUpdateWithoutImagesInput, HorseUncheckedUpdateWithoutImagesInput>
  }

  export type HorseUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHorsesNestedInput
    category?: HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput
    gender?: HorseGenderUpdateOneRequiredWithoutHorsesNestedInput
    discipline?: HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput
    vetReport?: HorseVetReportUpdateOneWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUpdateManyWithoutHorseNestedInput
  }

  export type HorseUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    genderId?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    disciplineId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vetReport?: HorseVetReportUncheckedUpdateOneWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUncheckedUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput
  }

  export type HorseCreateWithoutDisciplineInput = {
    id?: string
    name: string
    pedigree?: string | null
    age: number
    height: number
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHorsesInput
    category: HorseCategoryCreateNestedOneWithoutHorsesInput
    gender: HorseGenderCreateNestedOneWithoutHorsesInput
    images?: HorseImageCreateNestedManyWithoutHorseInput
    vetReport?: HorseVetReportCreateNestedOneWithoutHorseInput
    xrayResults?: HorseXrayResultsCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesCreateNestedManyWithoutHorseInput
  }

  export type HorseUncheckedCreateWithoutDisciplineInput = {
    id?: string
    userId: string
    categoryId: string
    name: string
    pedigree?: string | null
    age: number
    genderId: string
    height: number
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: HorseImageUncheckedCreateNestedManyWithoutHorseInput
    vetReport?: HorseVetReportUncheckedCreateNestedOneWithoutHorseInput
    xrayResults?: HorseXrayResultsUncheckedCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput
  }

  export type HorseCreateOrConnectWithoutDisciplineInput = {
    where: HorseWhereUniqueInput
    create: XOR<HorseCreateWithoutDisciplineInput, HorseUncheckedCreateWithoutDisciplineInput>
  }

  export type HorseCreateManyDisciplineInputEnvelope = {
    data: HorseCreateManyDisciplineInput | HorseCreateManyDisciplineInput[]
  }

  export type HorseUpsertWithWhereUniqueWithoutDisciplineInput = {
    where: HorseWhereUniqueInput
    update: XOR<HorseUpdateWithoutDisciplineInput, HorseUncheckedUpdateWithoutDisciplineInput>
    create: XOR<HorseCreateWithoutDisciplineInput, HorseUncheckedCreateWithoutDisciplineInput>
  }

  export type HorseUpdateWithWhereUniqueWithoutDisciplineInput = {
    where: HorseWhereUniqueInput
    data: XOR<HorseUpdateWithoutDisciplineInput, HorseUncheckedUpdateWithoutDisciplineInput>
  }

  export type HorseUpdateManyWithWhereWithoutDisciplineInput = {
    where: HorseScalarWhereInput
    data: XOR<HorseUpdateManyMutationInput, HorseUncheckedUpdateManyWithoutDisciplineInput>
  }

  export type HorseCreateWithoutVetReportInput = {
    id?: string
    name: string
    pedigree?: string | null
    age: number
    height: number
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHorsesInput
    category: HorseCategoryCreateNestedOneWithoutHorsesInput
    gender: HorseGenderCreateNestedOneWithoutHorsesInput
    discipline: HorseDisciplineCreateNestedOneWithoutHorsesInput
    images?: HorseImageCreateNestedManyWithoutHorseInput
    xrayResults?: HorseXrayResultsCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesCreateNestedManyWithoutHorseInput
  }

  export type HorseUncheckedCreateWithoutVetReportInput = {
    id?: string
    userId: string
    categoryId: string
    name: string
    pedigree?: string | null
    age: number
    genderId: string
    height: number
    disciplineId: string
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: HorseImageUncheckedCreateNestedManyWithoutHorseInput
    xrayResults?: HorseXrayResultsUncheckedCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput
  }

  export type HorseCreateOrConnectWithoutVetReportInput = {
    where: HorseWhereUniqueInput
    create: XOR<HorseCreateWithoutVetReportInput, HorseUncheckedCreateWithoutVetReportInput>
  }

  export type HorseUpsertWithoutVetReportInput = {
    update: XOR<HorseUpdateWithoutVetReportInput, HorseUncheckedUpdateWithoutVetReportInput>
    create: XOR<HorseCreateWithoutVetReportInput, HorseUncheckedCreateWithoutVetReportInput>
    where?: HorseWhereInput
  }

  export type HorseUpdateToOneWithWhereWithoutVetReportInput = {
    where?: HorseWhereInput
    data: XOR<HorseUpdateWithoutVetReportInput, HorseUncheckedUpdateWithoutVetReportInput>
  }

  export type HorseUpdateWithoutVetReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHorsesNestedInput
    category?: HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput
    gender?: HorseGenderUpdateOneRequiredWithoutHorsesNestedInput
    discipline?: HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput
    images?: HorseImageUpdateManyWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUpdateManyWithoutHorseNestedInput
  }

  export type HorseUncheckedUpdateWithoutVetReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    genderId?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    disciplineId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: HorseImageUncheckedUpdateManyWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUncheckedUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput
  }

  export type HorseCreateWithoutXrayResultsInput = {
    id?: string
    name: string
    pedigree?: string | null
    age: number
    height: number
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHorsesInput
    category: HorseCategoryCreateNestedOneWithoutHorsesInput
    gender: HorseGenderCreateNestedOneWithoutHorsesInput
    discipline: HorseDisciplineCreateNestedOneWithoutHorsesInput
    images?: HorseImageCreateNestedManyWithoutHorseInput
    vetReport?: HorseVetReportCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesCreateNestedManyWithoutHorseInput
  }

  export type HorseUncheckedCreateWithoutXrayResultsInput = {
    id?: string
    userId: string
    categoryId: string
    name: string
    pedigree?: string | null
    age: number
    genderId: string
    height: number
    disciplineId: string
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: HorseImageUncheckedCreateNestedManyWithoutHorseInput
    vetReport?: HorseVetReportUncheckedCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput
  }

  export type HorseCreateOrConnectWithoutXrayResultsInput = {
    where: HorseWhereUniqueInput
    create: XOR<HorseCreateWithoutXrayResultsInput, HorseUncheckedCreateWithoutXrayResultsInput>
  }

  export type HorseUpsertWithoutXrayResultsInput = {
    update: XOR<HorseUpdateWithoutXrayResultsInput, HorseUncheckedUpdateWithoutXrayResultsInput>
    create: XOR<HorseCreateWithoutXrayResultsInput, HorseUncheckedCreateWithoutXrayResultsInput>
    where?: HorseWhereInput
  }

  export type HorseUpdateToOneWithWhereWithoutXrayResultsInput = {
    where?: HorseWhereInput
    data: XOR<HorseUpdateWithoutXrayResultsInput, HorseUncheckedUpdateWithoutXrayResultsInput>
  }

  export type HorseUpdateWithoutXrayResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHorsesNestedInput
    category?: HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput
    gender?: HorseGenderUpdateOneRequiredWithoutHorsesNestedInput
    discipline?: HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput
    images?: HorseImageUpdateManyWithoutHorseNestedInput
    vetReport?: HorseVetReportUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUpdateManyWithoutHorseNestedInput
  }

  export type HorseUncheckedUpdateWithoutXrayResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    genderId?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    disciplineId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: HorseImageUncheckedUpdateManyWithoutHorseNestedInput
    vetReport?: HorseVetReportUncheckedUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput
  }

  export type UserFavoriteHorsesCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    horse: HorseCreateNestedOneWithoutFavoriteByUsersInput
  }

  export type UserFavoriteHorsesUncheckedCreateWithoutUserInput = {
    id?: string
    horseId: string
    createdAt?: Date | string
  }

  export type UserFavoriteHorsesCreateOrConnectWithoutUserInput = {
    where: UserFavoriteHorsesWhereUniqueInput
    create: XOR<UserFavoriteHorsesCreateWithoutUserInput, UserFavoriteHorsesUncheckedCreateWithoutUserInput>
  }

  export type UserFavoriteHorsesCreateManyUserInputEnvelope = {
    data: UserFavoriteHorsesCreateManyUserInput | UserFavoriteHorsesCreateManyUserInput[]
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type HorseCreateWithoutUserInput = {
    id?: string
    name: string
    pedigree?: string | null
    age: number
    height: number
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: HorseCategoryCreateNestedOneWithoutHorsesInput
    gender: HorseGenderCreateNestedOneWithoutHorsesInput
    discipline: HorseDisciplineCreateNestedOneWithoutHorsesInput
    images?: HorseImageCreateNestedManyWithoutHorseInput
    vetReport?: HorseVetReportCreateNestedOneWithoutHorseInput
    xrayResults?: HorseXrayResultsCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesCreateNestedManyWithoutHorseInput
  }

  export type HorseUncheckedCreateWithoutUserInput = {
    id?: string
    categoryId: string
    name: string
    pedigree?: string | null
    age: number
    genderId: string
    height: number
    disciplineId: string
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: HorseImageUncheckedCreateNestedManyWithoutHorseInput
    vetReport?: HorseVetReportUncheckedCreateNestedOneWithoutHorseInput
    xrayResults?: HorseXrayResultsUncheckedCreateNestedOneWithoutHorseInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput
  }

  export type HorseCreateOrConnectWithoutUserInput = {
    where: HorseWhereUniqueInput
    create: XOR<HorseCreateWithoutUserInput, HorseUncheckedCreateWithoutUserInput>
  }

  export type HorseCreateManyUserInputEnvelope = {
    data: HorseCreateManyUserInput | HorseCreateManyUserInput[]
  }

  export type UserReviewCreateWithoutUserInput = {
    id?: string
    reviewer: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserReviewUncheckedCreateWithoutUserInput = {
    id?: string
    reviewer: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserReviewCreateOrConnectWithoutUserInput = {
    where: UserReviewWhereUniqueInput
    create: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput>
  }

  export type UserReviewCreateManyUserInputEnvelope = {
    data: UserReviewCreateManyUserInput | UserReviewCreateManyUserInput[]
  }

  export type UserFavoriteHorsesUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFavoriteHorsesWhereUniqueInput
    update: XOR<UserFavoriteHorsesUpdateWithoutUserInput, UserFavoriteHorsesUncheckedUpdateWithoutUserInput>
    create: XOR<UserFavoriteHorsesCreateWithoutUserInput, UserFavoriteHorsesUncheckedCreateWithoutUserInput>
  }

  export type UserFavoriteHorsesUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFavoriteHorsesWhereUniqueInput
    data: XOR<UserFavoriteHorsesUpdateWithoutUserInput, UserFavoriteHorsesUncheckedUpdateWithoutUserInput>
  }

  export type UserFavoriteHorsesUpdateManyWithWhereWithoutUserInput = {
    where: UserFavoriteHorsesScalarWhereInput
    data: XOR<UserFavoriteHorsesUpdateManyMutationInput, UserFavoriteHorsesUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type HorseUpsertWithWhereUniqueWithoutUserInput = {
    where: HorseWhereUniqueInput
    update: XOR<HorseUpdateWithoutUserInput, HorseUncheckedUpdateWithoutUserInput>
    create: XOR<HorseCreateWithoutUserInput, HorseUncheckedCreateWithoutUserInput>
  }

  export type HorseUpdateWithWhereUniqueWithoutUserInput = {
    where: HorseWhereUniqueInput
    data: XOR<HorseUpdateWithoutUserInput, HorseUncheckedUpdateWithoutUserInput>
  }

  export type HorseUpdateManyWithWhereWithoutUserInput = {
    where: HorseScalarWhereInput
    data: XOR<HorseUpdateManyMutationInput, HorseUncheckedUpdateManyWithoutUserInput>
  }

  export type UserReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: UserReviewWhereUniqueInput
    update: XOR<UserReviewUpdateWithoutUserInput, UserReviewUncheckedUpdateWithoutUserInput>
    create: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput>
  }

  export type UserReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: UserReviewWhereUniqueInput
    data: XOR<UserReviewUpdateWithoutUserInput, UserReviewUncheckedUpdateWithoutUserInput>
  }

  export type UserReviewUpdateManyWithWhereWithoutUserInput = {
    where: UserReviewScalarWhereInput
    data: XOR<UserReviewUpdateManyMutationInput, UserReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type UserReviewScalarWhereInput = {
    AND?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
    OR?: UserReviewScalarWhereInput[]
    NOT?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
    id?: StringFilter<"UserReview"> | string
    userId?: StringFilter<"UserReview"> | string
    reviewer?: StringFilter<"UserReview"> | string
    rating?: IntFilter<"UserReview"> | number
    comment?: StringNullableFilter<"UserReview"> | string | null
    createdAt?: DateTimeFilter<"UserReview"> | Date | string
    updatedAt?: DateTimeFilter<"UserReview"> | Date | string
  }

  export type UserCreateWithoutUserFavoriteHorsesInput = {
    id?: string
    name: string
    firebaseUid: string
    phoneNumber?: string | null
    email?: string | null
    whatsAppNumber?: string | null
    verifiedSeller?: boolean
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
    horses?: HorseCreateNestedManyWithoutUserInput
    reviews?: UserReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserFavoriteHorsesInput = {
    id?: string
    name: string
    firebaseUid: string
    phoneNumber?: string | null
    email?: string | null
    whatsAppNumber?: string | null
    verifiedSeller?: boolean
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    horses?: HorseUncheckedCreateNestedManyWithoutUserInput
    reviews?: UserReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserFavoriteHorsesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserFavoriteHorsesInput, UserUncheckedCreateWithoutUserFavoriteHorsesInput>
  }

  export type HorseCreateWithoutFavoriteByUsersInput = {
    id?: string
    name: string
    pedigree?: string | null
    age: number
    height: number
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHorsesInput
    category: HorseCategoryCreateNestedOneWithoutHorsesInput
    gender: HorseGenderCreateNestedOneWithoutHorsesInput
    discipline: HorseDisciplineCreateNestedOneWithoutHorsesInput
    images?: HorseImageCreateNestedManyWithoutHorseInput
    vetReport?: HorseVetReportCreateNestedOneWithoutHorseInput
    xrayResults?: HorseXrayResultsCreateNestedOneWithoutHorseInput
  }

  export type HorseUncheckedCreateWithoutFavoriteByUsersInput = {
    id?: string
    userId: string
    categoryId: string
    name: string
    pedigree?: string | null
    age: number
    genderId: string
    height: number
    disciplineId: string
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: HorseImageUncheckedCreateNestedManyWithoutHorseInput
    vetReport?: HorseVetReportUncheckedCreateNestedOneWithoutHorseInput
    xrayResults?: HorseXrayResultsUncheckedCreateNestedOneWithoutHorseInput
  }

  export type HorseCreateOrConnectWithoutFavoriteByUsersInput = {
    where: HorseWhereUniqueInput
    create: XOR<HorseCreateWithoutFavoriteByUsersInput, HorseUncheckedCreateWithoutFavoriteByUsersInput>
  }

  export type UserUpsertWithoutUserFavoriteHorsesInput = {
    update: XOR<UserUpdateWithoutUserFavoriteHorsesInput, UserUncheckedUpdateWithoutUserFavoriteHorsesInput>
    create: XOR<UserCreateWithoutUserFavoriteHorsesInput, UserUncheckedCreateWithoutUserFavoriteHorsesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserFavoriteHorsesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserFavoriteHorsesInput, UserUncheckedUpdateWithoutUserFavoriteHorsesInput>
  }

  export type UserUpdateWithoutUserFavoriteHorsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedSeller?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    horses?: HorseUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserFavoriteHorsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedSeller?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    horses?: HorseUncheckedUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HorseUpsertWithoutFavoriteByUsersInput = {
    update: XOR<HorseUpdateWithoutFavoriteByUsersInput, HorseUncheckedUpdateWithoutFavoriteByUsersInput>
    create: XOR<HorseCreateWithoutFavoriteByUsersInput, HorseUncheckedCreateWithoutFavoriteByUsersInput>
    where?: HorseWhereInput
  }

  export type HorseUpdateToOneWithWhereWithoutFavoriteByUsersInput = {
    where?: HorseWhereInput
    data: XOR<HorseUpdateWithoutFavoriteByUsersInput, HorseUncheckedUpdateWithoutFavoriteByUsersInput>
  }

  export type HorseUpdateWithoutFavoriteByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHorsesNestedInput
    category?: HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput
    gender?: HorseGenderUpdateOneRequiredWithoutHorsesNestedInput
    discipline?: HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput
    images?: HorseImageUpdateManyWithoutHorseNestedInput
    vetReport?: HorseVetReportUpdateOneWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUpdateOneWithoutHorseNestedInput
  }

  export type HorseUncheckedUpdateWithoutFavoriteByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    genderId?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    disciplineId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: HorseImageUncheckedUpdateManyWithoutHorseNestedInput
    vetReport?: HorseVetReportUncheckedUpdateOneWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUncheckedUpdateOneWithoutHorseNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    name: string
    firebaseUid: string
    phoneNumber?: string | null
    email?: string | null
    whatsAppNumber?: string | null
    verifiedSeller?: boolean
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userFavoriteHorses?: UserFavoriteHorsesCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    horses?: HorseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    firebaseUid: string
    phoneNumber?: string | null
    email?: string | null
    whatsAppNumber?: string | null
    verifiedSeller?: boolean
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userFavoriteHorses?: UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    horses?: HorseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedSeller?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFavoriteHorses?: UserFavoriteHorsesUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    horses?: HorseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedSeller?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFavoriteHorses?: UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    horses?: HorseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    firebaseUid: string
    phoneNumber?: string | null
    email?: string | null
    whatsAppNumber?: string | null
    verifiedSeller?: boolean
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userFavoriteHorses?: UserFavoriteHorsesCreateNestedManyWithoutUserInput
    horses?: HorseCreateNestedManyWithoutUserInput
    reviews?: UserReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    firebaseUid: string
    phoneNumber?: string | null
    email?: string | null
    whatsAppNumber?: string | null
    verifiedSeller?: boolean
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userFavoriteHorses?: UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput
    horses?: HorseUncheckedCreateNestedManyWithoutUserInput
    reviews?: UserReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedSeller?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFavoriteHorses?: UserFavoriteHorsesUpdateManyWithoutUserNestedInput
    horses?: HorseUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedSeller?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFavoriteHorses?: UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput
    horses?: HorseUncheckedUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HorseImageCreateManyHorseInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFavoriteHorsesCreateManyHorseInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type HorseImageUpdateWithoutHorseInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseImageUncheckedUpdateWithoutHorseInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseImageUncheckedUpdateManyWithoutHorseInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteHorsesUpdateWithoutHorseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserFavoriteHorsesNestedInput
  }

  export type UserFavoriteHorsesUncheckedUpdateWithoutHorseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteHorsesUncheckedUpdateManyWithoutHorseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseCreateManyCategoryInput = {
    id?: string
    userId: string
    name: string
    pedigree?: string | null
    age: number
    genderId: string
    height: number
    disciplineId: string
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHorsesNestedInput
    gender?: HorseGenderUpdateOneRequiredWithoutHorsesNestedInput
    discipline?: HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput
    images?: HorseImageUpdateManyWithoutHorseNestedInput
    vetReport?: HorseVetReportUpdateOneWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUpdateManyWithoutHorseNestedInput
  }

  export type HorseUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    genderId?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    disciplineId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: HorseImageUncheckedUpdateManyWithoutHorseNestedInput
    vetReport?: HorseVetReportUncheckedUpdateOneWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUncheckedUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput
  }

  export type HorseUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    genderId?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    disciplineId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseCreateManyGenderInput = {
    id?: string
    userId: string
    categoryId: string
    name: string
    pedigree?: string | null
    age: number
    height: number
    disciplineId: string
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseUpdateWithoutGenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHorsesNestedInput
    category?: HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput
    discipline?: HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput
    images?: HorseImageUpdateManyWithoutHorseNestedInput
    vetReport?: HorseVetReportUpdateOneWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUpdateManyWithoutHorseNestedInput
  }

  export type HorseUncheckedUpdateWithoutGenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    disciplineId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: HorseImageUncheckedUpdateManyWithoutHorseNestedInput
    vetReport?: HorseVetReportUncheckedUpdateOneWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUncheckedUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput
  }

  export type HorseUncheckedUpdateManyWithoutGenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    disciplineId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseCreateManyDisciplineInput = {
    id?: string
    userId: string
    categoryId: string
    name: string
    pedigree?: string | null
    age: number
    genderId: string
    height: number
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHorsesNestedInput
    category?: HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput
    gender?: HorseGenderUpdateOneRequiredWithoutHorsesNestedInput
    images?: HorseImageUpdateManyWithoutHorseNestedInput
    vetReport?: HorseVetReportUpdateOneWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUpdateManyWithoutHorseNestedInput
  }

  export type HorseUncheckedUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    genderId?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: HorseImageUncheckedUpdateManyWithoutHorseNestedInput
    vetReport?: HorseVetReportUncheckedUpdateOneWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUncheckedUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput
  }

  export type HorseUncheckedUpdateManyWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    genderId?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteHorsesCreateManyUserInput = {
    id?: string
    horseId: string
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorseCreateManyUserInput = {
    id?: string
    categoryId: string
    name: string
    pedigree?: string | null
    age: number
    genderId: string
    height: number
    disciplineId: string
    location: string
    price: number
    description: string
    veterinaryDocumentAvailable?: boolean
    xrayResultsAvailable?: boolean
    videoUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserReviewCreateManyUserInput = {
    id?: string
    reviewer: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFavoriteHorsesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horse?: HorseUpdateOneRequiredWithoutFavoriteByUsersNestedInput
  }

  export type UserFavoriteHorsesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    horseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteHorsesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    horseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput
    gender?: HorseGenderUpdateOneRequiredWithoutHorsesNestedInput
    discipline?: HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput
    images?: HorseImageUpdateManyWithoutHorseNestedInput
    vetReport?: HorseVetReportUpdateOneWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUpdateManyWithoutHorseNestedInput
  }

  export type HorseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    genderId?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    disciplineId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: HorseImageUncheckedUpdateManyWithoutHorseNestedInput
    vetReport?: HorseVetReportUncheckedUpdateOneWithoutHorseNestedInput
    xrayResults?: HorseXrayResultsUncheckedUpdateOneWithoutHorseNestedInput
    favoriteByUsers?: UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput
  }

  export type HorseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pedigree?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    genderId?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    disciplineId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    veterinaryDocumentAvailable?: BoolFieldUpdateOperationsInput | boolean
    xrayResultsAvailable?: BoolFieldUpdateOperationsInput | boolean
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewer?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewer?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewer?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}