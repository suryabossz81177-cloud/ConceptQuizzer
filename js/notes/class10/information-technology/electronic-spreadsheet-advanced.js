// Class 10 Information Technology — ultra-detailed continuous chapter
const ChapterData = {
  "id": "10-it-electronic-spreadsheet-advanced",
  "class": 10,
  "subject": "Information Technology",
  "chapterNumber": 2,
  "title": "Electronic Spreadsheet (Advanced)",
  "description": "A continuous study of advanced spreadsheet analysis, automation, linking and collaboration using Calc-style tools.",
  "summary": "Advanced spreadsheets combine data consolidation, subtotals, scenarios, Goal Seek, Solver, macros, cross-sheet references, hyperlinks and review features.",
  "sections": [
    {
      "title": "Analyse Data Using Scenarios, Consolidation and Goal Seek",
      "blocks": [
        {
          "type": "paragraph",
          "title": "2.1 From ordinary calculation to data analysis",
          "text": "A spreadsheet becomes especially powerful when a worksheet is used not only to store values but also to investigate how changes in one part of a model affect the result. Advanced spreadsheet tools help combine information, summarise groups, test alternative assumptions, find required input values, automate repeated actions and connect data stored in different sheets or files."
        },
        {
          "type": "paragraph",
          "title": "2.2 Consolidating data",
          "text": "Data consolidation combines information from multiple ranges into a single summary. The source ranges may represent different months, departments, classes or branches. Instead of manually copying and adding the figures, the consolidation facility can use functions such as Sum, Average, Count, Maximum or Minimum to produce a combined result."
        },
        {
          "type": "paragraph",
          "title": "2.3 Planning a consolidation",
          "text": "Before consolidating, the user should check that the source ranges represent comparable information. Similar row and column labels make the resulting summary easier to interpret. The source data should also be checked for missing values, inconsistent spelling and incompatible units before the summary is created."
        },
        {
          "type": "data",
          "title": "Example of consolidation",
          "headers": [
            "Source sheet",
            "Total sales"
          ],
          "rows": [
            [
              "January",
              "₹82,000"
            ],
            [
              "February",
              "₹91,500"
            ],
            [
              "March",
              "₹88,750"
            ],
            [
              "Combined quarter",
              "₹2,62,250"
            ]
          ]
        },
        {
          "type": "exam",
          "title": "What is data consolidation?",
          "question": "Define data consolidation in a spreadsheet.",
          "answer": "Data consolidation is the process of combining data from multiple ranges or worksheets into one summary range, usually by applying an aggregation such as Sum, Average, Count, Maximum or Minimum."
        },
        {
          "type": "paragraph",
          "title": "2.4 Groups and subtotals",
          "text": "Grouping brings related rows together so that a large dataset can be viewed at a useful level. Subtotals then calculate a summary for each group. For example, a sales list can be arranged by product category and a subtotal can be calculated for each category before a grand total is displayed."
        },
        {
          "type": "paragraph",
          "title": "2.5 Why sorting matters before subtotals",
          "text": "Subtotals work most clearly when records belonging to the same group are arranged together. Sorting by the grouping field makes the structure visible and reduces the chance of confusing one group with another. The sort should be planned carefully because changing row order changes how the grouped information is displayed."
        },
        {
          "type": "paragraph",
          "title": "2.6 What-if analysis",
          "text": "What-if analysis asks a question of the form: what happens to the result if one or more input values change? A spreadsheet model may contain sales, costs, tax rates, marks or loan assumptions. Instead of changing the original values repeatedly and forgetting the earlier result, scenarios allow alternative sets of values to be stored and compared."
        },
        {
          "type": "paragraph",
          "title": "2.7 Scenarios",
          "text": "A scenario is a named set of input values that represents one possible situation. For example, a project budget may have Optimistic, Expected and Conservative scenarios. Each scenario can use different assumptions while the formulas remain unchanged. This makes comparison more systematic."
        },
        {
          "type": "comic",
          "title": "Comic: Surya tests three budgets",
          "dialogues": [
            {
              "character": "Surya",
              "dialogue": "My project budget changes whenever I change the expected number of participants."
            },
            {
              "character": "Verma Sir",
              "dialogue": "Create scenarios for different participation levels."
            },
            {
              "character": "Surya",
              "dialogue": "Then I can compare the results without rewriting the formulas."
            },
            {
              "character": "Verma Sir",
              "dialogue": "Exactly. The formula is the model; the scenario supplies an alternative set of inputs."
            }
          ],
          "result": "Scenarios separate the calculation model from the assumptions being tested."
        },
        {
          "type": "paragraph",
          "title": "2.8 Goal Seek",
          "text": "Goal Seek works in the opposite direction from an ordinary formula calculation. Normally the spreadsheet calculates an output from known inputs. Goal Seek starts with a desired output and determines the input value that must change to reach that output, while the rest of the model is kept according to the specified conditions."
        },
        {
          "type": "paragraph",
          "title": "2.9 Goal Seek example",
          "text": "Suppose a student has a current average and wants to know what score is required in the final assessment to reach a target average. If the final score is the variable cell and the average is the formula cell, Goal Seek can search for the score that makes the formula cell equal to the desired target. This avoids trial-and-error calculations."
        },
        {
          "type": "exam",
          "title": "Differentiate What-if Scenario and Goal Seek",
          "question": "Explain the difference between a scenario and Goal Seek.",
          "answer": "A scenario stores and compares alternative sets of input values to observe different results. Goal Seek starts with a required result and calculates the input value needed to achieve that result."
        },
        {
          "type": "paragraph",
          "title": "2.10 Solver as an advanced optimisation tool",
          "text": "Solver extends the idea of Goal Seek by allowing a model to work with more than one changing cell and, depending on the spreadsheet implementation, constraints. It is useful when the problem is not simply “find one input for one target” but “find suitable values for several variables while satisfying conditions.”"
        },
        {
          "type": "paragraph",
          "title": "2.11 Setting up a spreadsheet model for analysis",
          "text": "An effective analysis model separates inputs, calculations and outputs. Input cells contain assumptions such as quantity, price or rate. Formula cells calculate intermediate values. Output cells display the final result. Keeping these roles clear makes scenarios and Goal Seek easier to configure and reduces accidental changes to formulas."
        },
        {
          "type": "paragraph",
          "title": "2.12 Macros: automation of repeated work",
          "text": "A macro is a recorded or programmed sequence of actions that can be executed again. Macros are useful when the same set of spreadsheet operations is performed repeatedly. Recording a macro captures the user's actions so that the sequence can later be run without manually repeating every step."
        },
        {
          "type": "paragraph",
          "title": "2.13 Recording a macro",
          "text": "To record a macro, first identify the exact sequence of actions that should be automated. Start the recording facility, perform the required spreadsheet actions, stop the recording and give the macro a meaningful name. The recorded macro can then be run when the same operation is required again."
        },
        {
          "type": "paragraph",
          "title": "2.14 Running and organising macros",
          "text": "A saved macro can be executed from the macro management interface. Good naming and organisation are important because a workbook may contain several macros. A macro should be tested on sample data before being used on important information, especially when it changes or deletes cells."
        }
      ]
    },
    {
      "title": "Macros and Spreadsheet Automation",
      "blocks": [
        {
          "type": "paragraph",
          "title": "2.15 Macro as a function",
          "text": "A macro can also be written or organised as a function in environments that support user-defined functions. Such a function accepts input values and returns a result according to its instructions. This can extend the built-in calculation abilities of a spreadsheet, but macros should be used carefully because they can execute actions beyond ordinary cell formulas."
        },
        {
          "type": "exam",
          "title": "What is a macro?",
          "question": "Define a macro and give one use.",
          "answer": "A macro is a recorded or programmed sequence of spreadsheet actions that can be executed again. It is useful for automating repetitive tasks such as formatting a report or preparing a recurring summary."
        },
        {
          "type": "paragraph",
          "title": "2.16 Linking multiple sheets",
          "text": "A workbook can contain several sheets that represent related parts of one project. One sheet may hold raw data, another may contain calculations and a third may display a report. A reference from one sheet to another allows the report to update when the source value changes."
        },
        {
          "type": "paragraph",
          "title": "2.17 References to another sheet",
          "text": "A cell reference can point to a cell located on another sheet. The reference identifies both the sheet and the cell address. Such references are valuable when a summary sheet should automatically use values stored on separate monthly or departmental sheets."
        },
        {
          "type": "paragraph",
          "title": "2.18 References to another document",
          "text": "Spreadsheet software can also reference data stored in another document or workbook. This creates a connection between files. When external references are used, the source file location must remain accessible, and users should understand that moving or renaming the source can affect the link."
        },
        {
          "type": "paragraph",
          "title": "2.19 Hyperlinks",
          "text": "A hyperlink is an interactive connection that opens another location when selected. In a spreadsheet, it can connect to a website, another document, an email address, a file or a location within the current workbook. Hyperlinks are useful for navigation in large workbooks and project dashboards."
        },
        {
          "type": "paragraph",
          "title": "2.20 Relative and absolute links",
          "text": "A relative reference or link depends on the relationship between the current location and the target, while an absolute link identifies a fixed location. Relative links can be useful when a group of files is moved together; absolute links can point to a specific fixed resource. The correct choice depends on how the files will be distributed."
        }
      ]
    },
    {
      "title": "Linking Spreadsheet Data",
      "blocks": [
        {
          "type": "paragraph",
          "title": "2.21 Linking to external data",
          "text": "External data can be brought into a spreadsheet so that information from another source can be analysed without retyping it. The connection method depends on the data source and software configuration. The key advantage is reduced duplication of data entry, while the key concern is maintaining a valid and trustworthy connection."
        },
        {
          "type": "paragraph",
          "title": "2.22 Registered data sources",
          "text": "A spreadsheet application can work with registered data sources so that structured external information can be accessed in a controlled manner. Registration tells the application how to locate and recognise the source. This is useful in environments where data is shared across several office applications."
        },
        {
          "type": "paragraph",
          "title": "2.23 Sharing a spreadsheet",
          "text": "A shared spreadsheet allows multiple users to work with the same document according to the supported collaboration features. Before sharing, users should agree on file structure, naming conventions and responsibilities. Shared work is most reliable when users avoid making incompatible changes at the same time."
        },
        {
          "type": "paragraph",
          "title": "2.24 Recording changes",
          "text": "Change recording keeps a history of edits made to a shared spreadsheet. It can help identify what was changed and support later review. This is especially useful when several people are entering or correcting information in the same workbook."
        },
        {
          "type": "paragraph",
          "title": "2.25 Comments and review",
          "text": "Comments allow a reviewer to attach an explanation, question or suggestion to a cell without replacing the cell's main content. Comments can be edited or removed as the review progresses. A clear review process distinguishes between a comment that suggests a change and a change that has already been accepted."
        },
        {
          "type": "paragraph",
          "title": "2.26 Merging and comparing documents",
          "text": "When two versions of a spreadsheet contain different changes, merging can combine compatible changes while comparison helps identify where the versions differ. These tools are particularly useful when a shared document has been edited separately by different people."
        },
        {
          "type": "comic",
          "title": "Comic: Ansh reviews a shared sheet",
          "dialogues": [
            {
              "character": "Ansh",
              "dialogue": "I changed the same budget cell that another teammate changed."
            },
            {
              "character": "Sharma Sir",
              "dialogue": "That is why shared documents need a review process."
            },
            {
              "character": "Ansh",
              "dialogue": "We can record changes, compare versions and decide which edit should remain."
            },
            {
              "character": "Sharma Sir",
              "dialogue": "Correct. Collaboration is not only about sharing a file; it is also about controlling revisions."
            }
          ],
          "result": "Review features help turn a shared spreadsheet into a controlled collaborative document."
        }
      ]
    },
    {
      "title": "Share and Review a Spreadsheet",
      "blocks": [
        {
          "type": "exam",
          "title": "Why should formulas and input cells be separated?",
          "question": "Explain one advantage of separating inputs from calculations in an analytical spreadsheet.",
          "answer": "It reduces accidental overwriting of formulas and makes the model easier to understand. Input cells can be changed during scenarios or Goal Seek while formula cells continue to perform the intended calculations."
        },
        {
          "type": "practice",
          "title": "Application question",
          "question": "A school has monthly fee data on twelve sheets and wants one annual summary. Which advanced spreadsheet feature is suitable for combining comparable ranges?",
          "answer": "Data consolidation can be used to combine the monthly ranges into an annual summary, provided the source structures are comparable."
        }
      ]
    },
    {
      "title": "Extended Analysis, Automation and Review",
      "blocks": [
        {
          "type": "paragraph",
          "title": "2.27 Consolidation: choosing the function",
          "text": "The consolidation operation is meaningful only when the selected ranges represent comparable information. Sum is appropriate for totals, Average for mean values, Count for the number of entries, Maximum for the highest value and Minimum for the lowest value. The chosen function should match the question being asked of the data."
        },
        {
          "type": "paragraph",
          "title": "2.28 Consolidation by position and by category",
          "text": "When corresponding values occupy the same positions in comparable source ranges, consolidation can use their positions. When labels identify the items and the source ranges are not arranged identically, consolidation can use matching categories or labels where supported. The distinction matters because the spreadsheet must know how values from different sources correspond."
        },
        {
          "type": "paragraph",
          "title": "2.29 Subtotal workflow",
          "text": "A reliable subtotal workflow is: check the dataset; sort it by the grouping field; select the relevant range; choose the subtotal operation; identify the group field; select the function and numeric field; apply the subtotal; inspect the group results and grand total. The final display should make each group and its subtotal visually clear."
        },
        {
          "type": "paragraph",
          "title": "2.30 Nested grouping",
          "text": "A dataset can contain more than one level of classification. For example, sales may be grouped first by region and then by product. Multiple levels of subtotals can provide a useful hierarchy, but the user should avoid creating more grouping levels than are needed to answer the question."
        },
        {
          "type": "paragraph",
          "title": "2.31 Scenario planning in a project budget",
          "text": "Consider a school event budget with cells for participant count, ticket price, material cost and fixed expenses. An optimistic scenario may assume higher participation, while a conservative scenario may assume fewer participants. The formulas remain the same; only the assumptions change. Comparing scenarios reveals how sensitive the final surplus is to those assumptions."
        },
        {
          "type": "paragraph",
          "title": "2.32 Scenario names and documentation",
          "text": "Scenario names should describe the assumption set rather than the result. Names such as “Low Attendance”, “Expected Attendance” and “High Attendance” are clearer than “Result 1”, “Result 2” and “Result 3”. A short note describing the assumptions makes the workbook easier for another user to interpret."
        },
        {
          "type": "paragraph",
          "title": "2.33 Goal Seek: identifying the target cell",
          "text": "Goal Seek needs a formula cell whose value is to reach a target, and a variable input cell that can be changed to achieve that target. If the formula cell is not actually dependent on the changing cell, Goal Seek cannot produce a meaningful solution. Therefore the model should be tested before the tool is used."
        },
        {
          "type": "paragraph",
          "title": "2.34 Goal Seek: worked reasoning",
          "text": "Suppose a shop's total revenue is calculated as quantity multiplied by selling price. If the desired revenue is known and quantity is the variable, Goal Seek can determine the quantity required to reach that revenue at the specified price. The result should then be checked for practical constraints such as stock availability."
        },
        {
          "type": "paragraph",
          "title": "2.35 Solver and constraints",
          "text": "An optimisation problem can have several changing values and restrictions. A production model might seek a maximum profit while requiring each quantity to remain non-negative and total material use to stay within available stock. Solver-type tools are designed for such problems because the desired result depends on multiple conditions."
        },
        {
          "type": "paragraph",
          "title": "2.36 Macro safety",
          "text": "Macros can automate useful work, but a macro is an executable sequence and should not be treated as harmless formatting. A macro from an unknown source should not be enabled without understanding its origin and purpose. For school projects, macros should be tested on a copy of the workbook before being run on important data."
        },
        {
          "type": "paragraph",
          "title": "2.37 Recording a clean macro",
          "text": "A recorded macro should contain only the actions that are intended to be repeated. Before recording, remove accidental selections and unnecessary formatting. During recording, follow the exact sequence once. After recording, give the macro a meaningful name and test it on a duplicate worksheet."
        },
        {
          "type": "paragraph",
          "title": "2.38 Linking sheets without creating confusion",
          "text": "A workbook with many sheets should use a predictable naming system. Source sheets can contain raw records, calculation sheets can contain formulas and a dashboard or summary sheet can present results. Clear separation makes cross-sheet references easier to audit."
        },
        {
          "type": "paragraph",
          "title": "2.39 Absolute and relative cell references in linked calculations",
          "text": "When formulas are copied, relative references change according to their new position, while absolute references remain fixed. Mixed references can fix only the row or only the column. Correct reference choice is essential when a formula is copied across a large range or when a summary uses a constant rate stored in one cell."
        },
        {
          "type": "paragraph",
          "title": "2.40 External links and file management",
          "text": "An external reference creates a dependency between the current workbook and another file. Before distributing a workbook, the user should know whether the recipient will have access to the source file. If a link is broken, values may not update correctly. A self-contained copy may be preferable when the source does not need to remain dynamic."
        },
        {
          "type": "paragraph",
          "title": "2.41 Hyperlinks for navigation",
          "text": "A large workbook can use hyperlinks as a navigation system. A summary sheet can link to detailed sheets, source documents or relevant web resources. Hyperlink text should be meaningful, such as “Open Attendance Sheet”, rather than an unexplained long address."
        },
        {
          "type": "paragraph",
          "title": "2.42 Shared editing and conflict management",
          "text": "Shared editing works best when users agree on which areas each person is responsible for. If two users edit the same cells independently, their changes may conflict. Recording changes, comparing versions and merging documents can help identify and resolve such differences."
        },
        {
          "type": "paragraph",
          "title": "2.43 Final review checklist for a spreadsheet",
          "text": "Before submitting an advanced spreadsheet, check formulas, input values, totals, labels, number formats, sheet names, external links, hyperlinks, macros and comments. Test important formulas with a second calculation or a simple sample value. A visually attractive spreadsheet can still be wrong if the model has an incorrect reference."
        },
        {
          "type": "exam",
          "title": "Why is sorting important before creating subtotals?",
          "question": "Give a reason for sorting a dataset before applying grouped subtotals.",
          "answer": "Sorting places records belonging to the same group together, allowing the subtotal operation to identify each group clearly and produce an organised summary."
        },
        {
          "type": "exam",
          "title": "What does Goal Seek require?",
          "question": "State the basic elements required for a Goal Seek operation.",
          "answer": "Goal Seek requires a formula cell containing the result to be targeted, a desired target value, and a variable input cell whose value can be changed to make the formula cell reach the target."
        },
        {
          "type": "practice",
          "title": "Case study",
          "question": "A school wants to know how many participants are needed for an event to collect ₹1,00,000 when ticket price and fixed costs are already known. Which tool is suitable and why?",
          "answer": "Goal Seek is suitable because the desired revenue or surplus is known and the required participant count is the variable input that must be calculated."
        },
        {
          "type": "practice",
          "title": "Case study",
          "question": "A company wants the best combination of two products while respecting limits on raw material and labour. Which advanced approach is more appropriate than simple Goal Seek?",
          "answer": "A Solver-type optimisation tool is more appropriate because several changing values and constraints have to be considered together."
        }
      ]
    }
  ],
  "keyTerms": [
    "Consolidation",
    "Subtotal",
    "Scenario",
    "What-if Analysis",
    "Goal Seek",
    "Solver",
    "Macro",
    "Reference",
    "Hyperlink",
    "External Data",
    "Shared Spreadsheet",
    "Track Changes",
    "Comment"
  ],
  "importantPoints": [
    "Separate inputs from formulas and outputs.",
    "Use scenarios for alternative assumptions.",
    "Use Goal Seek to find a required input.",
    "Use macros for repetitive actions.",
    "Understand references and hyperlinks.",
    "Review changes before finalising shared work."
  ]
};
