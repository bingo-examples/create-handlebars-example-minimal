import { createTemplate } from "bingo";
import { handlebars } from "bingo-handlebars";
import path from "node:path";
import { z } from "zod";

const template = createTemplate({
  options: {
    owner: z.string(),
    repository: z.string(),
  },
  async produce({ options }) {
    return {
      files: await handlebars(
        path.join(import.meta.dirname, "template"),
        options
      ),
    };
  },
});

export default template;

export const { createConfig } = template;
