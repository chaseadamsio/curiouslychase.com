"use client";
import { Button } from "@/components/ui/button";
import { usePostHog } from "posthog-js/react";
import { useCallback, useState } from "react";

export const IncompleteArticle = ({ slug }: { slug: string }) => {
  const [submitted, setSubmitted] = useState(false);
  const posthog = usePostHog();

  const handleSubmit = useCallback(() => {
    posthog?.capture("article_interest", {
      slug,
    });
    setSubmitted(true);
  }, []);

  return (
    <div className="mx-auto max-w-xl p-8 border border-magenta-500 rounded-xl bg-black text-center">
      {submitted ? (
        <>
          <h2 className="my-0 py-0 border-none">Thank you!</h2>
          <div>
            Your interest helps me prioritize which articles to finish first.
          </div>
        </>
      ) : (
        <>
          <h2 className="my-0 py-0 border-none">
            This Article is Still in Progress
          </h2>
          <p className="text-base">
            This post is a work in progress and not yet complete. If you're
            interested in reading the full article, let me know!
          </p>
          <h3 className="text-lg">Want to Read It?</h3>
          <p className="text-sm">
            Your interest helps me prioritize which articles to finish first.
            Click below to tell me you want to read this article when it's
            complete.
          </p>
          <div className="pt-4 flex justify-center items-center">
            <Button onClick={handleSubmit} variant="outline">
              I Want To Read It!
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
