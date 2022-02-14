export const config = {
  releaseBranches: ["main"],
  // TODO: Generate dynamically
  packages: {
    "next-auth": "packages/next-auth",
    "adapter-dgraph": "packages/adapter-dgraph",
    "adapter-fauna": "packages/adapter-fauna",
    "adapter-mikro-orm": "packages/adapter-mikro-orm",
    "adapter-neo4j": "packages/adapter-neo4j",
    "adapter-prisma": "packages/adapter-prisma",
    "adapter-upstash-redis": "packages/adapter-upstash-redis",
    "adapter-dynamodb": "packages/adapter-dynamodb",
    "adapter-firebase": "packages/adapter-firebase",
    "adapter-mongodb": "packages/adapter-mongodb",
    "adapter-pouchdb": "packages/adapter-pouchdb",
    "adapter-sequelize": "packages/adapter-sequelize",
    "adapter-typeorm-legacy": "packages/adapter-typeorm-legacy",
  },
  rootDir: process.cwd(),
  RELEASE_COMMIT_MSG: "chore(release): bump version",
  BREAKING_COMMIT_MSG: "BREAKING CHANGE",
  SKIP_RELEASE_MSG: "[skip release]",
  RELEASE_COMMIT_TYPES: ["feat", "fix"],
  dryRun: !process.env.CI || !!process.env.DRY_RUN,
}
