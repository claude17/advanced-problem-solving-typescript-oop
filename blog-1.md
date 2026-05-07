# Title: How Pick and Omit Utility Types keep the code DRY(Don't Repeat Yourself)

## Introduction

When working with TypeScript, we often create main type with interface or type alias for various properties. But in reality, we don't need all the properties everywhere.

For example:

- An individual profile page only needs certain information of the user's name, age and email and not other unncessary properties
- An API response of all properties except the password
- Certain cases where we need editable fields

For these use cases if we keep creating seperate types, we are basically repeating the same code again and again which is not efficient coding. 

So, this is where TypeScript utility types like `Pick` and `Omit` become very useful which helps to us reduce the code.

`Pick` and `Omit` utility type enables us to create smaller specific versions of a main type without rewriting everything manually. This helps to keep the code DRY (Don't Repeat Yourself).

---

# Creating a Main Type

Let’s start with a main type using a type alias.

```ts
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
};
```

This `User` type contains all the information about a user.

---

# Using Pick

The `Pick` utility type allows us to keep the properties we need from an existing type.

## Syntax

```ts
Pick<Type, Keys>
```

---

## Example

For example, we only want to show public profile information with `name`, `email` and `role`.

```ts
type UserProfile = Pick<User, "name" | "email" | "role">;
```

Now `UserProfile` new type alias becomes:

```ts
type UserProfile = {
  id: number;
  name: string;
  email: string;
};
```

---

## Why this is better

Without `Pick`, we would have to write the code manually. such as:

```ts
type UserProfile = {
  id: number;
  name: string;
  email: string;
};
```

So, this means repeating the same thing and increaseing hassle. In larger projects it becomes a problem because:

- The same properties get repeated
- Updating types becomes harder
- There is a higher chance of mistakes
- The code becomes harder to maintain

`Pick` solves this by reusing the original type.

---

# Using Omit

The `Omit` utility type allows us to remove specific properties from a type. This will inlucde all the properties except the ones we choose not to. That's why we `Omit` those properties.

## Syntax

```ts
Omit<Type, Keys>
```

---

## Example

If we want to send user data through an API or other way but do not want to expose the password.

```ts
type SafeUser = Omit<User, "password">;
```

Now the new type SafeUser becomes:

```ts
type SafeUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};
```

The password field is automatically removed and we didn't have to initialize a new type. In this way, We just get a version of new type using `Omit` without creating a new type.

---

# How Pick and Omit Keep Code DRY

DRY means "Don't Repeat Yourself."

Instead of creating many separate types manually, `Pick` and `Omit` allow us to reuse one master type and create smaller versions from it.

This gives several advantages:

- Less duplicated code
- Easier maintenance
- Cleaner project structure
- Easier updating type
- Faster development

For example, if we later add a new property to the `User` type:

```ts
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  phone: string;
};
```

We only update the main type once instead of updating multiple duplicated types manually.

---

# Conclusion

`Pick` and `Omit` are very powerful  useful utility types in TypeScript.They are used to create specific version of a main type without the need to repeat the same code. They prevent code duplication and reuse existing types to keep code base clean, maintainable and DRY.