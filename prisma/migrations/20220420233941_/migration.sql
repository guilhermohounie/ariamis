-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hover" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "height" INTEGER NOT NULL DEFAULT 400,
    "width" INTEGER NOT NULL DEFAULT 400
);
INSERT INTO "new_Comic" ("description", "hover", "id", "source", "title") SELECT "description", "hover", "id", "source", "title" FROM "Comic";
DROP TABLE "Comic";
ALTER TABLE "new_Comic" RENAME TO "Comic";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
