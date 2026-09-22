// Class 10 Information Technology — ultra-detailed continuous chapter
const ChapterData = {
  "id": "10-informationtechnology-digital-documentation-advanced",
  "class": 10,
  "subject": "Information Technology",
  "chapterNumber": 1,
  "title": "Digital Documentation (Advanced)",
  "description": "A continuous, topic-by-topic study of advanced document creation with styles, images, tables of contents, templates and document review.",
  "summary": "Styles create consistent structure; images and drawing objects enrich documents; tables of contents, templates and review tools make long documents manageable.",
  "sections": [
    {
      "title": "Introduction to Styles",
      "blocks": [
        {
          "type": "paragraph",
          "title": "1.1 Why Styles Matter",
          "text": "A long document becomes difficult to maintain when every heading, paragraph, list and table is formatted separately. A style solves this problem by storing a named collection of formatting properties. When the same style is applied at several places, those places follow a common visual and structural rule. This makes a document consistent and also makes later editing much faster."
        },
        {
          "type": "concept",
          "title": "A style is more than decoration",
          "text": "A style is a named set of formatting instructions for a particular kind of document element. Depending on the style category, it can control font properties, paragraph spacing, alignment, borders, background, indentation, numbering and other presentation features. The important idea is that the formatting is stored as a reusable rule rather than being recreated manually each time."
        },
        {
          "type": "paragraph",
          "title": "1.2 Main categories of styles",
          "text": "The major style categories used in Writer are Page Styles, Paragraph Styles, Character Styles, Frame Styles, List Styles and Table Styles. Each category has a different job. Page styles control the page as a whole; paragraph styles control complete paragraphs; character styles affect selected characters or words; frame styles control framed objects; list styles manage bullets and numbering; and table styles help format tables consistently."
        },
        {
          "type": "data",
          "title": "Style categories at a glance",
          "headers": [
            "Category",
            "Main purpose",
            "Typical use"
          ],
          "rows": [
            [
              "Page",
              "Controls page-level layout",
              "Margins, page size, header and footer"
            ],
            [
              "Paragraph",
              "Controls paragraph formatting",
              "Headings, body text, spacing and alignment"
            ],
            [
              "Character",
              "Controls selected characters",
              "Emphasis, special terms and inline formatting"
            ],
            [
              "Frame",
              "Controls framed objects",
              "Text frames and positioned objects"
            ],
            [
              "List",
              "Controls list structure",
              "Bullets, numbering and outline lists"
            ],
            [
              "Table",
              "Controls table appearance",
              "Borders, alignment and table formatting"
            ]
          ]
        },
        {
          "type": "exam",
          "title": "Why are styles useful?",
          "question": "State four advantages of using styles in a long document.",
          "answer": "Styles provide consistent formatting, save time, make global formatting changes easier, and create a logical structure that supports navigation and automatic features such as a table of contents."
        },
        {
          "type": "comic",
          "title": "Comic: Surya discovers the power of one style",
          "dialogues": [
            {
              "character": "Surya",
              "dialogue": "I changed the heading font one by one, and now the document has thirty headings!"
            },
            {
              "character": "Verma Sir",
              "dialogue": "That is exactly why styles exist. Apply one heading style and reuse it."
            },
            {
              "character": "Surya",
              "dialogue": "Then if I change the style later, all matching headings can follow the new design."
            },
            {
              "character": "Verma Sir",
              "dialogue": "Correct. The structure and the appearance become easier to manage."
            }
          ],
          "result": "A named formatting rule can save repeated manual work and keep a document uniform."
        },
        {
          "type": "paragraph",
          "title": "1.3 The Styles and Formatting window",
          "text": "The Styles and Formatting window or sidebar provides a central place from which styles can be viewed, selected, created and managed. Instead of searching through many toolbar controls, the user can work with a list of available styles. Filtering the displayed style category helps when a document contains many different kinds of formatting."
        },
        {
          "type": "paragraph",
          "title": "1.4 Applying a style",
          "text": "To apply a paragraph style, place the cursor inside the paragraph or select the relevant text when appropriate, open the Styles area and choose the required style. The document immediately adopts the stored formatting. Applying a style is preferable to manually changing several properties when the same appearance is required repeatedly."
        },
        {
          "type": "paragraph",
          "title": "1.5 Fill Format Mode",
          "text": "Fill Format Mode is useful when one style has to be applied to many separated areas. After activating the mode, the selected style can be painted onto multiple document elements. This is especially helpful while cleaning up a long report because repeated manual opening of the style list is avoided."
        },
        {
          "type": "paragraph",
          "title": "1.6 Creating a new style from a selection",
          "text": "A custom style can be created from text that has already been formatted exactly as required. The selected formatting becomes the starting point for the new named style. This method is useful when the document already contains a design that should become a reusable rule."
        },
        {
          "type": "paragraph",
          "title": "1.7 Creating a style by drag and drop",
          "text": "A new style can also be created by dragging formatted content into the Styles area in supported Writer versions. The resulting style can then be named and reused. This method is convenient when an existing paragraph already demonstrates the desired visual design."
        },
        {
          "type": "paragraph",
          "title": "1.8 Updating a style from a selection",
          "text": "Suppose a heading style is already used throughout a report but the selected heading has been redesigned. The style can be updated from that selection. All document elements using the updated style can then reflect the revised formatting. This avoids editing every heading separately."
        },
        {
          "type": "paragraph",
          "title": "1.9 Loading styles from another source",
          "text": "Styles can be loaded from a template or another document when a common design is needed across multiple files. This is useful for school reports, project files and institutional documents in which the same heading, paragraph and page conventions must be maintained."
        },
        {
          "type": "exam",
          "title": "Creating a style from existing formatting",
          "question": "How can a new paragraph style be created from a paragraph that already has the required appearance?",
          "answer": "Format the paragraph as required, use the Styles and Formatting facility to create a new style from the current selection, give the style a meaningful name, and save it. The new style can then be applied elsewhere."
        },
        {
          "type": "practice",
          "title": "Application question",
          "question": "Why is Fill Format Mode particularly useful in a long document?",
          "answer": "It allows one selected style to be applied quickly to many separate locations, reducing repeated navigation through the style list and helping maintain consistent formatting."
        }
      ]
    },
    {
      "title": "Working with Images and Drawing Objects",
      "blocks": [
        {
          "type": "paragraph",
          "title": "1.10 Working with images in a document",
          "text": "Images can make a report easier to understand, but they also affect page layout. Writer allows an image to be inserted through the image insertion command, dragged from a file manager, or copied and pasted. Another important choice is whether the image is embedded in the document or linked to an external file."
        },
        {
          "type": "paragraph",
          "title": "1.11 Embedded versus linked images",
          "text": "An embedded image becomes part of the document file, so the document carries the image with it. A linked image remains associated with an external file. Linking can reduce document size and allows the source image to be updated independently, but the link can break if the source file is moved or renamed. Embedding is generally safer when a document must be transferred as a self-contained file."
        },
        {
          "type": "paragraph",
          "title": "1.12 Resizing and cropping",
          "text": "Resizing changes the dimensions of the image. Cropping removes unwanted portions from the visible area without necessarily changing the original image file. Resizing is useful when an image is too large or too small for the page, while cropping is useful when only a particular part of the image is relevant."
        },
        {
          "type": "paragraph",
          "title": "1.13 Image placement and anchoring",
          "text": "An image can be positioned relative to a page, paragraph, character or another frame depending on the chosen anchor. The anchor determines how the image behaves when surrounding text is edited. Correct anchoring prevents a picture from unexpectedly moving away from the text it illustrates."
        },
        {
          "type": "paragraph",
          "title": "1.14 Arrangement and text wrapping",
          "text": "Arrangement controls the stacking order of objects when they overlap. Text wrapping controls how text flows around an image or drawing object. Common wrapping choices determine whether text stays above and below an object, flows around it, or passes behind or in front of it. Choosing the correct arrangement and wrapping makes a page readable rather than crowded."
        },
        {
          "type": "paragraph",
          "title": "1.15 Drawing objects",
          "text": "Writer can create drawing objects such as lines, rectangles, circles, arrows and other shapes. Their fill, border, size and position can be modified. Drawing objects are useful for diagrams, labels, callouts and simple visual explanations. Multiple objects can be selected and grouped so that they can be moved or resized as one unit."
        },
        {
          "type": "comic",
          "title": "Comic: Arushi fixes an image layout",
          "dialogues": [
            {
              "character": "Arushi",
              "dialogue": "The picture keeps jumping to another page whenever I add text."
            },
            {
              "character": "Sharma Sir",
              "dialogue": "Check its anchor. The anchor determines how the object is tied to the document content."
            },
            {
              "character": "Arushi",
              "dialogue": "And the wrapping decides how the paragraph flows around it."
            },
            {
              "character": "Sharma Sir",
              "dialogue": "Exactly. Think of anchor as the attachment point and wrapping as the path followed by text."
            }
          ],
          "result": "Good image placement depends on anchor, arrangement, alignment and wrapping—not only on image size."
        },
        {
          "type": "exam",
          "title": "Differentiate resizing and cropping",
          "question": "Differentiate between resizing and cropping an image.",
          "answer": "Resizing changes the dimensions of the displayed image, while cropping removes unwanted portions from the visible area. Resizing changes how large the image appears; cropping changes which part of the image is shown."
        },
        {
          "type": "paragraph",
          "title": "1.16 Table of Contents: purpose",
          "text": "A Table of Contents (ToC) provides a structured list of document headings and their page locations. It is especially useful in long reports, projects and reference documents. The ToC works properly when heading hierarchy has been represented through heading styles rather than only by changing font size manually."
        },
        {
          "type": "paragraph",
          "title": "1.17 Heading hierarchy",
          "text": "A well-structured document has levels of headings. A major chapter heading can be followed by section headings and then subsection headings. This hierarchy communicates the logical relationship between topics. It also provides the information required by Writer to build a structured table of contents."
        },
        {
          "type": "paragraph",
          "title": "1.18 Creating a Table of Contents",
          "text": "Before inserting a ToC, apply appropriate heading styles to the headings. Place the cursor at the location where the ToC should appear, use the insert command for a Table of Contents and Index, choose the desired settings and confirm. Writer then builds the list from the document heading structure."
        },
        {
          "type": "paragraph",
          "title": "1.19 Customising a Table of Contents",
          "text": "The appearance and information shown in a ToC can be customised. The user can control which heading levels are included and modify visual elements such as alignment, tab stops, numbering and styles. Customisation should preserve the hierarchy so that the reader can still understand the structure immediately."
        },
        {
          "type": "paragraph",
          "title": "1.20 Maintaining and updating a Table of Contents",
          "text": "A ToC is generated from document structure, so it can become outdated after headings are added, deleted or moved. Updating the ToC refreshes the heading list and page references. The ToC should therefore be updated before a final document is printed or exported."
        },
        {
          "type": "paragraph",
          "title": "1.21 Templates",
          "text": "A template is a pre-designed document framework that contains formatting, layout and sometimes reusable content. Templates are useful when many documents need the same structure. A school report template, for example, may already contain page settings, heading styles, title formatting and placeholders."
        }
      ]
    },
    {
      "title": "Table of Contents, Templates and Review Features",
      "blocks": [
        {
          "type": "paragraph",
          "title": "1.22 Creating and using templates",
          "text": "A useful template begins with a carefully designed document containing the required styles and layout. It can then be saved as a template and reused for new documents. Existing built-in or saved templates can be selected when starting a document, while online templates may provide additional starting designs when available."
        },
        {
          "type": "paragraph",
          "title": "1.23 Importing, editing, moving and exporting templates",
          "text": "Templates can be organised so that they are available to the correct user or category. A template can be edited when the standard design changes, moved to another template category when supported, or exported for use elsewhere. These operations help maintain a common document standard across projects."
        },
        {
          "type": "paragraph",
          "title": "1.24 Track Changes",
          "text": "Track Changes records modifications made to a document so that another person can review them. Insertions, deletions and formatting changes can be displayed as revisions. This is useful when a teacher reviews a student's project or when several people edit the same report."
        },
        {
          "type": "paragraph",
          "title": "1.25 Reviewing changes and comments",
          "text": "A reviewer can examine recorded changes and accept or reject them individually or as a group. Comments provide an additional channel for discussion without directly changing the document text. Comments can be added, edited and removed as the review progresses."
        },
        {
          "type": "paragraph",
          "title": "1.26 Comparing documents",
          "text": "Document comparison helps identify differences between two versions of a document. It is useful when the original file and a revised file need to be checked for changes. The comparison process supports controlled review rather than relying on memory to find every modification."
        },
        {
          "type": "exam",
          "title": "Why should heading styles be used before creating a ToC?",
          "question": "Explain the relationship between heading styles and a Table of Contents.",
          "answer": "Heading styles provide a recognised hierarchy that the word processor can read. The Table of Contents uses that hierarchy to collect headings, arrange them by level and display their page references. Manually enlarging text does not reliably create the same structural information."
        },
        {
          "type": "exam",
          "title": "What is Track Changes?",
          "question": "Define Track Changes and state one practical use.",
          "answer": "Track Changes is a document-review feature that records modifications such as insertions and deletions. It is useful when a teacher, editor or collaborator needs to review proposed changes and accept or reject them before the final document is produced."
        },
        {
          "type": "practice",
          "title": "Scenario",
          "question": "A student has to create ten reports with identical title pages, heading styles and margins. What feature should be used?",
          "answer": "A template should be created with the common layout, styles and page settings. Each new report can then be started from that template."
        }
      ]
    },
    {
      "title": "Extended Practical Understanding and Examination Preparation",
      "blocks": [
        {
          "type": "paragraph",
          "title": "1.27 Practical sequence: designing a structured report",
          "text": "Begin by deciding the purpose and audience of the report. Create a logical heading hierarchy before spending time on decoration. Define the page style, margins and header or footer requirements, then create or choose paragraph styles for the title, main headings, subheadings and body text. Insert the content, place images near the relevant explanations, build the Table of Contents from the heading structure, and finally review the document using Track Changes or comments when collaboration is required."
        },
        {
          "type": "paragraph",
          "title": "1.28 Why direct formatting can become a problem",
          "text": "Direct formatting changes the appearance of selected text without necessarily creating a reusable structural rule. It is useful for small exceptions, but excessive direct formatting makes a long document harder to maintain. If twenty headings are manually changed and the design later needs to be updated, each heading may require another edit. Styles turn the repeated decision into one manageable rule."
        },
        {
          "type": "paragraph",
          "title": "1.29 Paragraph style and character style are not interchangeable",
          "text": "A paragraph style applies to the paragraph as a structural unit and can control properties such as alignment, spacing and indentation. A character style is intended for selected characters or words within a paragraph. For example, a heading is normally better represented by a paragraph style, while a special technical term inside ordinary text can use a character style."
        },
        {
          "type": "paragraph",
          "title": "1.30 Page style controls the page framework",
          "text": "Page style decisions affect the physical page rather than an individual sentence. Page size, orientation, margins, header, footer and related page-level settings belong to this layer. A document that uses a consistent page style is easier to print and export because the page framework is controlled separately from the body text."
        },
        {
          "type": "paragraph",
          "title": "1.31 List styles and numbering structure",
          "text": "List styles control the appearance and hierarchy of numbered or bulleted lists. A properly designed list style keeps indentation and numbering consistent. This is particularly useful for multi-level instructions where main steps contain substeps. Manually typing numbers can cause errors when an item is inserted or removed."
        },
        {
          "type": "paragraph",
          "title": "1.32 Table styles and readable tabular information",
          "text": "A table should make relationships between values easy to see. Table styles can provide consistent borders, alignment and visual emphasis. A good table also uses meaningful headings, appropriate column widths and a logical order. Formatting should support the data instead of distracting from it."
        },
        {
          "type": "paragraph",
          "title": "1.33 Image insertion: choosing the right method",
          "text": "When an image already exists as a file, inserting it creates a controlled document object. Drag-and-drop is convenient for quick placement, while copy-and-paste is useful when the image is already available in another application. Linking should be chosen only when there is a clear reason to keep the source outside the document."
        },
        {
          "type": "paragraph",
          "title": "1.34 Keeping image proportions",
          "text": "When an image is resized, its original proportions should normally be preserved so that people and objects do not appear stretched. A distorted photograph can make a professional document look unreliable. Crop first when unnecessary edges are the problem; resize when the whole image is useful but its overall dimensions need adjustment."
        },
        {
          "type": "paragraph",
          "title": "1.35 Alignment of images",
          "text": "Alignment determines where an object sits relative to its anchor or surrounding content. For example, a diagram may be centred beneath a heading while a small icon may be aligned with a paragraph. Alignment should be chosen according to the role of the image rather than applied randomly to every object."
        },
        {
          "type": "paragraph",
          "title": "1.36 Grouping drawing objects",
          "text": "A diagram made from several shapes can become difficult to move when each object is independent. Selecting the related objects and grouping them creates a single movable unit. Grouping is especially useful for arrows connected to boxes, labelled diagrams and simple process charts. Ungrouping can be used when individual components need to be edited again."
        },
        {
          "type": "paragraph",
          "title": "1.37 ToC maintenance after editing",
          "text": "Adding a new heading, changing the order of sections or moving content can alter page references. The ToC should be refreshed after major editing. A final document check should confirm that headings shown in the ToC exist in the document and that page numbers correspond to the current version."
        },
        {
          "type": "paragraph",
          "title": "1.38 Template design should separate fixed and variable content",
          "text": "A template should contain the elements that remain common across documents, such as styles, page layout, title arrangement and standard headings. Content that changes from one report to another should be represented by placeholders or left for the new document. This prevents the template from becoming a copy of one old report."
        },
        {
          "type": "paragraph",
          "title": "1.39 Review workflow using Track Changes",
          "text": "A useful review workflow is: create a clean original, enable change recording, make proposed edits, add comments where an explanation is needed, inspect each revision, accept or reject the appropriate changes, resolve comments and save a clean final version. Keeping the review stages separate makes it easier to identify what has actually been approved."
        },
        {
          "type": "paragraph",
          "title": "1.40 Difference between comments and tracked changes",
          "text": "A tracked change modifies document content and records the modification for review. A comment is an attached note used to explain, question or suggest something. A reviewer might therefore insert a tracked change to correct a sentence and add a comment asking the author to verify the factual source."
        },
        {
          "type": "exam",
          "title": "Explain the difference between a template and a normal document",
          "question": "How is a template different from an ordinary document?",
          "answer": "A template is a reusable starting framework containing standard layout, formatting and sometimes placeholder content. An ordinary document is a particular finished or developing instance of content. A template is designed to generate multiple documents with a common structure."
        },
        {
          "type": "exam",
          "title": "What is anchoring?",
          "question": "Explain why anchoring is important for images in Writer.",
          "answer": "Anchoring determines how an inserted object is attached to the surrounding document structure. It influences how the object behaves when text or page layout changes, helping keep an illustration associated with the intended content."
        },
        {
          "type": "practice",
          "title": "Practical sequence",
          "question": "Write the correct broad order for producing a long school project with a ToC.",
          "answer": "Plan the structure; set page and paragraph styles; enter and organise content; insert and position images; apply heading hierarchy; insert the Table of Contents; review and update the ToC; proofread; use Track Changes/comments if required; accept or reject revisions; save or export the final document."
        },
        {
          "type": "practice",
          "title": "Troubleshooting",
          "question": "A picture moves unexpectedly after a paragraph is edited. Which settings should be checked first?",
          "answer": "Check the image anchor and text-wrapping/position settings. The anchor controls the relationship with document content, while wrapping and positioning control how the surrounding text and object interact."
        }
      ]
    }
  ],
  "keyTerms": [
    "Style",
    "Page Style",
    "Paragraph Style",
    "Character Style",
    "Frame Style",
    "List Style",
    "Table Style",
    "Fill Format Mode",
    "Anchor",
    "Text Wrapping",
    "Table of Contents",
    "Template",
    "Track Changes",
    "Comment"
  ],
  "importantPoints": [
    "Use styles instead of repeated manual formatting.",
    "Understand embedded and linked images.",
    "Use heading hierarchy for a Table of Contents.",
    "Use templates for repeated document designs.",
    "Use Track Changes and comments for review."
  ]
};
