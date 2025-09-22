import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "CV",
  description: "CV",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">CV</h1>	
	<embed src="FotisBranikasCv.pdf" type="application/pdf" width="100%" height="1000" title="Embedded PDF Viewer"/>
    </section>
  );
}
