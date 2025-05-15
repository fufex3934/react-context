import { AbilityBuilder, createMongoAbility } from "@casl/ability";

export const defineAbilitiesFor = (role) => {
  const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

  if (role === "admin") {
    can("manage", "all");
  } else if (role === "editor") {
    can("read", "Post");
    can("update", "Post");
  } else {
    can("read", "Post");
    cannot("update", "Post");
  }

  return build();
};
