import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const postSummary = `my favorite DataView JavaScript snippet that I use in Obsidian.`;

const postSupport = `I keep it in a note called *Tickle*.

it looks like this:

\`\`\`dataviewjs

const today = moment(new Date()).format("DD");

dv.header(1, \`Created on Day "\${today}"\`);

dv.list(dv.pages().where(p => {
	const fileCDay = moment(p.file.cday.ts).format("DD");
	const isDailyPage = p.file.link.path.includes("Periodic")
	return  fileCDay === today && !isDailyPage;
}).file.link)
\`\`\`

It's my favorite because at the end of the month, I will have seen all of the notes I've made in Obsidian. 

It's a great way to review and have ideas resurface to me in an unstructured way, by showing me the notes that were made on the same day number as today.

I want to use this post to inspire people to do use the same methodology.`;

async function getChatCompletion() {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: "org-c88Kmb7vYamPiBGMXJN0RvIG",
  });

  const openAIClient = new OpenAIApi(configuration);

  try {
    const result = await openAIClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that helps me write technical and educational technology blog posts.",
        },
        {
          role: "user",
          content: `
I want you to help me write a blog post about ${postSummary}

${postSupport}

I want you to use this writing style: Clear, slightly formal, but witty, friendly, flowing, simple sentences, bulleted list, short sentences, like a captivating technical educator.

I want you to use this structure:

**Technical Post Format:**
1. Introduction: Briefly introduce the topic, its importance, and its relevance to the reader.
2. Prerequisites: List any necessary background knowledge or skills the reader should have before diving into the topic.
3. Objective: Clearly state the goal or problem to be solved, ensuring it aligns with the reader's needs or interests.
4. Step-by-Step Guide: Break down the topic or task into manageable steps, providing clear instructions for each step. Explain how and why each step contributes to achieving the overall goal.
5. Tips and Best Practices: Share useful tips, best practices, and common pitfalls to avoid, enhancing the reader's understanding and application of the topic.
6. Summary: Summarize key points, reiterate the objective, and suggest next steps or further reading to consolidate the reader's learning.
7. Additional Resources: Provide links to relevant documentation, articles, or other resources that offer more in-depth information or diverse perspectives on the topic.

Structure your response as ONLY the post as Markdown with YAML frontmatter. 

An inline codeblock is \`like this\`. The section headings should be # (not ##). 

For frontmatter, use this format:
---
title:
description:
---

	  Answer:`,
        },
      ],
    });

    if (result.status !== 200) {
      console.error(result.statusText);
      return {
        ok: false,
        error: new Error(
          `Call to OpenAI chat completion failed with no more retries left. ${result.statusText}`
        ),
      };
    }

    return { ok: true, value: result.data };
  } catch (err) {
    return {
      ok: false,
      error: new Error(
        `Error in getChatCompletion: ${err}
        `
      ),
    };
  }
}

async function main() {
  const result = await getChatCompletion();
  if (!result.ok) {
    console.error(result.error);
  }
  console.log(result.value?.choices[0].message?.content);
}

main();
