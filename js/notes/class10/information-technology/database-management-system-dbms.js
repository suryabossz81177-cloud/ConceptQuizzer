// Class 10 Information Technology — ultra-detailed continuous chapter
const ChapterData = {
  "id": "10-informationtechnology-database-management-system-dbms",
  "class": 10,
  "subject": "Information Technology",
  "chapterNumber": 3,
  "title": "Database Management System (DBMS)",
  "description": "A continuous chapter covering database concepts, relational tables, keys, relationships, queries, forms and reports in the order used for Class 10 practical work.",
  "summary": "A DBMS organises related data and provides structured tools for storing, retrieving, updating and presenting information.",
  "sections": [
    {
      "title": "Introduction to Database Management Systems",
      "blocks": [
        {
          "type": "paragraph",
          "title": "3.1 From data to information",
          "text": "Data consists of raw facts such as names, dates, marks, quantities or identification numbers. Information is data that has been organised and interpreted so that it becomes useful for a decision or activity. A school may store thousands of individual marks as data, while an analysed report showing class averages and subject-wise performance is information."
        },
        {
          "type": "paragraph",
          "title": "3.2 What is a database?",
          "text": "A database is an organised collection of related data that can be stored, searched, updated and managed systematically. Instead of keeping scattered lists in separate files, a database provides a structured environment in which related records can be maintained and retrieved when required."
        },
        {
          "type": "paragraph",
          "title": "3.3 Database Management System",
          "text": "A Database Management System (DBMS) is software used to create, store, organise, retrieve, update and manage data in databases. It provides tools for defining data structures and for performing operations on stored records. A DBMS also helps users work with data without having to manage the underlying storage manually."
        },
        {
          "type": "paragraph",
          "title": "3.4 Limitations of ordinary file-based storage",
          "text": "When data is kept in independent files, the same fact may have to be entered repeatedly. Different files may contain conflicting versions of the same information. Searching across many files can also be slow and difficult. A DBMS reduces such problems by organising related data in a controlled structure."
        },
        {
          "type": "exam",
          "title": "Differentiate data and information",
          "question": "Give a clear distinction between data and information.",
          "answer": "Data consists of raw facts or values, while information is processed, organised or interpreted data that has meaning and usefulness for a particular purpose."
        },
        {
          "type": "paragraph",
          "title": "3.5 Advantages of a DBMS",
          "text": "A DBMS supports organised storage, faster retrieval, controlled updating and better sharing of data. It can reduce unnecessary duplication, improve consistency and provide controlled access to information. The exact facilities depend on the database system being used."
        },
        {
          "type": "paragraph",
          "title": "3.6 Database models",
          "text": "A database model describes how data is organised. Earlier models include hierarchical and network structures. The relational model organises data into tables and uses relationships between tables to represent connections among records. The relational approach is especially important for the database work performed in LibreOffice Base."
        },
        {
          "type": "paragraph",
          "title": "3.7 Relational database vocabulary",
          "text": "In a relational database, a table represents a relation. A row is commonly called a record or tuple, while a column is called a field or attribute. The number of fields is related to the degree of the table, and the number of records represents its cardinality."
        },
        {
          "type": "data",
          "title": "Core relational terms",
          "headers": [
            "Term",
            "Meaning",
            "Example"
          ],
          "rows": [
            [
              "Table/Relation",
              "Structured collection of related records",
              "Student table"
            ],
            [
              "Record/Tuple",
              "One complete row",
              "One student entry"
            ],
            [
              "Field/Attribute",
              "One property represented by a column",
              "StudentName"
            ],
            [
              "Degree",
              "Number of fields in a relation",
              "5 columns"
            ],
            [
              "Cardinality",
              "Number of records in a relation",
              "40 students"
            ]
          ]
        },
        {
          "type": "paragraph",
          "title": "3.8 Keys and unique identification",
          "text": "A key is a field or combination of fields used to identify records or connect tables. A primary key uniquely identifies each record in a table. It should not contain duplicate values and normally should not be left empty when it is required for identification."
        },
        {
          "type": "paragraph",
          "title": "3.9 Candidate and alternate keys",
          "text": "A candidate key is a field or combination of fields that can uniquely identify a record and therefore could serve as a primary key. If more than one candidate key exists, one is chosen as the primary key and the others can be treated as alternate keys."
        },
        {
          "type": "paragraph",
          "title": "3.10 Foreign key",
          "text": "A foreign key is a field in one table that refers to a key field in another table. It creates a connection between the tables. For example, a StudentID field in a Fees table can refer to StudentID in the Student table, allowing fee records to be associated with the correct student."
        },
        {
          "type": "paragraph",
          "title": "3.11 Data types",
          "text": "A field should have a data type that matches the kind of value it stores. Common types include text, numeric values, dates and times, Boolean values and binary or long text data depending on the database software. Choosing the correct type improves storage, validation and sorting."
        }
      ]
    },
    {
      "title": "Tables, Keys and Records in Base",
      "blocks": [
        {
          "type": "paragraph",
          "title": "3.12 Starting with LibreOffice Base",
          "text": "LibreOffice Base provides a graphical environment for database work. Its major work areas include Tables, Queries, Forms and Reports. Tables hold the underlying records; queries retrieve or analyse selected data; forms provide a user-friendly interface for entering or viewing records; reports present organised output for reading or printing."
        },
        {
          "type": "data",
          "title": "Four main Base work areas",
          "headers": [
            "Work area",
            "Purpose"
          ],
          "rows": [
            [
              "Tables",
              "Store structured records and fields"
            ],
            [
              "Queries",
              "Retrieve, filter, sort or analyse selected data"
            ],
            [
              "Forms",
              "Provide an interface for entering and viewing records"
            ],
            [
              "Reports",
              "Present organised information in a formatted output"
            ]
          ]
        },
        {
          "type": "comic",
          "title": "Comic: Surya learns why a table is not a report",
          "dialogues": [
            {
              "character": "Surya",
              "dialogue": "If the table contains all the information, why do we need reports?"
            },
            {
              "character": "Verma Sir",
              "dialogue": "A table stores data. A report presents selected information in a readable, organised form."
            },
            {
              "character": "Surya",
              "dialogue": "So the same data can be shown differently depending on the purpose."
            },
            {
              "character": "Verma Sir",
              "dialogue": "Exactly. Storage and presentation are different database tasks."
            }
          ],
          "result": "A database separates storage, retrieval, data entry and presentation into connected components."
        },
        {
          "type": "paragraph",
          "title": "3.13 Creating a database and table",
          "text": "A database file is created first, after which tables can be designed. A table may be created using a wizard or in Design View. In Design View, the user specifies field names, field types and relevant properties. The primary key is then defined where required."
        },
        {
          "type": "paragraph",
          "title": "3.14 Table design and field properties",
          "text": "Good table design begins by deciding what facts must be stored. Each field should represent one meaningful property. Field names should be clear and consistent. Properties such as length, default values or required entry can be configured according to the data type and the needs of the database."
        },
        {
          "type": "paragraph",
          "title": "3.15 Entering and editing records",
          "text": "Records can be entered directly into a table. Existing records can be edited when information changes, and records that are no longer required can be removed with care. Deleting a record can affect related information, so relationships and integrity rules should be considered before removal."
        },
        {
          "type": "paragraph",
          "title": "3.16 Sorting and filtering records",
          "text": "Sorting changes the order in which records are displayed according to selected fields. Filtering temporarily restricts the visible records to those that satisfy specified conditions. Neither operation necessarily changes the underlying information; they change how the data is viewed or selected."
        },
        {
          "type": "exam",
          "title": "What is a primary key?",
          "question": "Define primary key and state two properties.",
          "answer": "A primary key is a field or combination of fields that uniquely identifies each record in a table. Its values must be unique and it should not be left empty for records that require identification."
        },
        {
          "type": "paragraph",
          "title": "3.17 Why multiple tables are needed",
          "text": "A single large table may repeat the same information many times. Splitting related information into separate tables reduces duplication and makes updates safer. For example, student details can be stored once in a Student table while attendance or fee transactions are stored in related tables."
        },
        {
          "type": "paragraph",
          "title": "3.18 One-to-one relationship",
          "text": "In a one-to-one relationship, one record in the first table is associated with at most one record in the second table, and vice versa. Such a relationship is less common but can be useful when different sets of information about the same entity are stored separately for design or security reasons."
        },
        {
          "type": "paragraph",
          "title": "3.19 One-to-many relationship",
          "text": "In a one-to-many relationship, one record in one table can be related to many records in another table. For example, one student can have many fee-payment records. The primary key of the first table can appear as a foreign key in the second table."
        },
        {
          "type": "paragraph",
          "title": "3.20 Many-to-many relationship",
          "text": "In a many-to-many relationship, records on both sides can be related to many records on the other side. This is usually implemented using a third linking table. For example, many students can join many activities, so a StudentActivity table can store each student-activity association."
        },
        {
          "type": "paragraph",
          "title": "3.21 Referential integrity",
          "text": "Referential integrity keeps relationships between related tables consistent. A foreign-key value should refer to a valid record in the related table, subject to the rules of the database system. This prevents broken references such as a payment linked to a student who does not exist."
        },
        {
          "type": "paragraph",
          "title": "3.22 Query: asking the database a question",
          "text": "A query is a request to retrieve or analyse selected information from a database. A query can select particular fields, apply conditions, sort results and perform calculations depending on the database system. Queries allow users to work with a meaningful subset of a larger dataset."
        }
      ]
    },
    {
      "title": "Multiple Tables and Relationships",
      "blocks": [
        {
          "type": "paragraph",
          "title": "3.23 Query design",
          "text": "A query can be created with a wizard, through Design View or with SQL where supported. In Design View, the user selects the required table or tables, chooses fields and specifies criteria. The database engine then produces the records satisfying those conditions."
        },
        {
          "type": "paragraph",
          "title": "3.24 Criteria and operators",
          "text": "Conditions can use comparison operators such as equal to, greater than, less than and not equal to. Logical operators can combine conditions. Text patterns may use wildcard facilities supported by the database system. The exact syntax should match the database software being used."
        },
        {
          "type": "paragraph",
          "title": "3.25 SQL basics",
          "text": "Structured Query Language (SQL) is a language used to communicate with relational databases. Common commands include SELECT for retrieving data, INSERT for adding records, UPDATE for modifying records and DELETE for removing records. Database systems may support additional commands for creating and altering structures."
        },
        {
          "type": "data",
          "title": "Basic SQL commands",
          "headers": [
            "Command",
            "Purpose",
            "Example pattern"
          ],
          "rows": [
            [
              "SELECT",
              "Retrieve data",
              "SELECT Name FROM Student;"
            ],
            [
              "INSERT",
              "Add a record",
              "INSERT INTO Student ...;"
            ],
            [
              "UPDATE",
              "Modify existing data",
              "UPDATE Student SET ...;"
            ],
            [
              "DELETE",
              "Remove records",
              "DELETE FROM Student WHERE ...;"
            ]
          ]
        },
        {
          "type": "exam",
          "title": "What is referential integrity?",
          "question": "Explain referential integrity in a relational database.",
          "answer": "Referential integrity is a rule that keeps related tables consistent by ensuring that a foreign-key reference corresponds to a valid related record, subject to the relationship rules defined in the database."
        },
        {
          "type": "paragraph",
          "title": "3.26 Forms",
          "text": "A form is a user-oriented interface for entering, viewing or editing database records. Instead of exposing the entire table structure, a form can present only the fields needed by the user. This makes data entry more controlled and easier to understand."
        },
        {
          "type": "paragraph",
          "title": "3.27 Creating a form with a wizard",
          "text": "A form wizard guides the user through selecting a table or query, choosing fields, arranging them and selecting an appearance. After the wizard finishes, the form can be opened and used for data entry or modified further in design mode."
        },
        {
          "type": "paragraph",
          "title": "3.28 Modifying forms",
          "text": "Form controls such as labels, text boxes, list boxes and buttons can be positioned and formatted. Labels can be renamed to make the purpose of fields clear. Background and layout can also be adjusted so that the form is readable and practical."
        },
        {
          "type": "paragraph",
          "title": "3.29 Searching and editing through a form",
          "text": "Forms can be used to move between records and locate a required record. Depending on the design, users can insert new records, edit existing values and remove records. Because forms operate on underlying data, the consequences of changes should be understood before saving them."
        },
        {
          "type": "paragraph",
          "title": "3.30 Reports",
          "text": "A report is a formatted presentation of database information. Unlike a form, which is designed primarily for interaction and data entry, a report is designed for organised viewing, analysis or printing. Reports can be based on tables or queries."
        },
        {
          "type": "paragraph",
          "title": "3.31 Creating a report with a wizard",
          "text": "The report wizard guides the user through selecting the source table or query, choosing fields, setting grouping and sorting options and choosing a layout. The resulting report can then be viewed and refined as required."
        },
        {
          "type": "comic",
          "title": "Comic: Divya prepares a school report",
          "dialogues": [
            {
              "character": "Divya",
              "dialogue": "I need a list of students who scored above 80, arranged by class."
            },
            {
              "character": "Shashank",
              "dialogue": "Use a query to select the correct records and sort them."
            },
            {
              "character": "Divya",
              "dialogue": "Then I can create a report from that result for printing."
            },
            {
              "character": "Shashank",
              "dialogue": "Exactly. Query first for the required information, report second for presentation."
            }
          ],
          "result": "Queries help obtain the required subset of data; reports turn that result into organised output."
        }
      ]
    },
    {
      "title": "Queries, Forms and Reports",
      "blocks": [
        {
          "type": "exam",
          "title": "Differentiate a form and a report",
          "question": "Give two differences between a database form and a report.",
          "answer": "A form is primarily an interactive interface for entering, viewing and editing records, while a report is primarily a formatted presentation of information for reading, analysis or printing. Forms are user-input oriented; reports are output oriented."
        },
        {
          "type": "practice",
          "title": "Case study",
          "question": "A school stores students, classes and fee payments. Explain a suitable three-table structure.",
          "answer": "Use a Student table containing StudentID and student details, a Class table containing ClassID and class details, and a FeePayment table containing payment details with StudentID as a foreign key. Relationships can connect students to their class and payment records."
        }
      ]
    },
    {
      "title": "Extended Database Design, Query Reasoning and Practical Preparation",
      "blocks": [
        {
          "type": "paragraph",
          "title": "3.32 Database planning begins with requirements",
          "text": "Before creating tables, identify what information the organisation actually needs. List the entities involved, the facts required about each entity and the questions users will ask. A school database might require students, classes, subjects, attendance and fees. Starting with requirements prevents unnecessary fields and poorly designed tables."
        },
        {
          "type": "paragraph",
          "title": "3.33 Entity and attribute thinking",
          "text": "An entity is a distinguishable object or concept about which information is stored, such as a student or book. An attribute describes a property of that entity, such as StudentName or BookTitle. Recognising entities and attributes helps convert a real-world problem into a relational database structure."
        },
        {
          "type": "paragraph",
          "title": "3.34 Avoiding unnecessary repetition",
          "text": "If the same class teacher name is typed into hundreds of student records, changing the teacher name later becomes error-prone. A separate Class table can store class information once, while a Student table stores a ClassID reference. This is a basic reason for using related tables rather than one giant list."
        },
        {
          "type": "paragraph",
          "title": "3.35 Choosing a primary key carefully",
          "text": "A primary key should identify a record reliably over time. A value that can change or be duplicated is a poor choice. A generated numeric ID is often convenient because it provides a stable identifier even when a student's name or phone number changes."
        },
        {
          "type": "paragraph",
          "title": "3.36 Composite keys",
          "text": "Sometimes one field alone is not unique. A combination of two or more fields can identify a record. For example, if one student can join several clubs and each club can contain many students, the combination StudentID + ClubID can identify one membership record in a linking table."
        },
        {
          "type": "paragraph",
          "title": "3.37 Foreign-key matching",
          "text": "A foreign key must use a compatible value that corresponds to a key in the related table. If StudentID is the primary key in Student, the same identifying value can be stored in FeePayment as a foreign key. The relationship then connects each payment to the correct student."
        },
        {
          "type": "paragraph",
          "title": "3.38 Relationship design example",
          "text": "Consider Students and Classes. One class contains many students, while each student belongs to one class at a given time. This is naturally represented as a one-to-many relationship from Class to Student. The ClassID can be stored in Student as a foreign key."
        },
        {
          "type": "paragraph",
          "title": "3.39 Relationship design for many-to-many data",
          "text": "Consider Students and Subjects. A student can study many subjects and a subject can be studied by many students. A direct two-table relationship cannot store every combination neatly, so a linking table such as StudentSubject can contain StudentID, SubjectID and additional attributes such as session or marks."
        },
        {
          "type": "paragraph",
          "title": "3.40 Integrity before data entry",
          "text": "Relationships should be planned before large-scale data entry. If related tables are created without a clear key structure, duplicate or unmatched records can appear. Referential integrity helps prevent invalid references, but good database design starts before the integrity rule is applied."
        },
        {
          "type": "paragraph",
          "title": "3.41 Query as selection and transformation",
          "text": "A query can do more than display all rows. It can select only required fields, filter records using conditions, sort the result and, where supported, calculate derived values. Thus a query acts as a controlled view of the underlying database rather than a second copy of all data."
        },
        {
          "type": "paragraph",
          "title": "3.42 Sorting inside a query",
          "text": "Sorting in a query determines the order of the returned records. A student list might be sorted by marks descending to identify high scores, or by class and then name to create an organised list. Sorting criteria should match the purpose of the output."
        },
        {
          "type": "paragraph",
          "title": "3.43 Criteria with multiple conditions",
          "text": "A query may need more than one condition. For example, a report could require students in Class 10 whose score is above 80. Both conditions must be represented correctly. Logical AND generally requires both conditions to be true, while OR allows either condition to be true."
        },
        {
          "type": "paragraph",
          "title": "3.44 SQL SELECT structure",
          "text": "A simple SELECT statement identifies the fields to retrieve and the table from which they come. A WHERE clause can restrict records, and an ORDER BY clause can control their order. For example: SELECT Name, Marks FROM Student WHERE Marks > 80 ORDER BY Marks DESC;"
        },
        {
          "type": "paragraph",
          "title": "3.45 SQL modification commands",
          "text": "INSERT adds records, UPDATE changes existing records and DELETE removes records. These commands should be used carefully because they change stored data. A WHERE condition is especially important in UPDATE and DELETE operations when only selected records should be modified."
        },
        {
          "type": "paragraph",
          "title": "3.46 Forms as controlled data-entry interfaces",
          "text": "Forms can hide unnecessary fields and present only the controls required for a task. This can reduce entry mistakes and make the interface easier for a user who does not need to understand the underlying table structure. Labels should describe the fields clearly."
        },
        {
          "type": "paragraph",
          "title": "3.47 Form controls",
          "text": "Text boxes accept text or numeric values, labels explain fields, list or combo controls can help users choose from available values, and buttons can provide actions where supported. A well-designed form balances ease of use with accurate data entry."
        },
        {
          "type": "paragraph",
          "title": "3.48 Reports and grouping",
          "text": "Reports become more useful when related records are grouped and sorted. A fee report could be grouped by class and then sorted by student name. A marks report could be arranged by subject or performance band. The report should reflect the decision or communication purpose of the database output."
        },
        {
          "type": "paragraph",
          "title": "3.49 Table, query, form and report together",
          "text": "These components form a workflow: tables store the underlying data; queries retrieve or analyse selected information; forms provide an interface for entering and viewing records; reports present organised results. Understanding this division prevents users from trying to use one component for every task."
        },
        {
          "type": "exam",
          "title": "Why is database design important before data entry?",
          "question": "Explain why requirements and relationships should be planned before entering many records.",
          "answer": "Planning identifies the required entities, fields, keys and relationships before duplication and inconsistencies spread through the database. A clear design makes data entry, retrieval, updating and reporting more reliable."
        },
        {
          "type": "exam",
          "title": "Explain one-to-many with an example",
          "question": "Give a one-to-many relationship using a school example.",
          "answer": "One class can contain many students, while each student belongs to one class at a given time. Therefore Class to Student is a one-to-many relationship, implemented by storing ClassID as a foreign key in Student."
        },
        {
          "type": "practice",
          "title": "SQL reasoning",
          "question": "Write a query pattern to display Name and Marks of students scoring above 80 in descending order of marks.",
          "answer": "SELECT Name, Marks FROM Student WHERE Marks > 80 ORDER BY Marks DESC;"
        },
        {
          "type": "practice",
          "title": "Design reasoning",
          "question": "A school wants to store student details and multiple fee payments for each student. Why should fee payments not simply be repeated as columns in the Student table?",
          "answer": "A student can have an unpredictable number of payments. A separate FeePayment table allows one student record to relate to many payment records without creating a new column for every possible payment."
        }
      ]
    },
    {
      "title": "Complete Textbook Flow: Database Design, Tables, Queries, Forms and Reports",
      "blocks": [
        {
          "type": "paragraph",
          "title": "3.50 Database work begins with requirements",
          "text": "Before opening a database application, identify what information must be stored and what questions the database must answer. For a school database, requirements might include student details, class information, subjects, marks and attendance. Writing these requirements first helps prevent unnecessary fields and poorly designed tables."
        },
        {
          "type": "paragraph",
          "title": "3.51 Entities and attributes",
          "text": "An entity is a distinguishable object or concept about which information is stored. An attribute describes a property of that entity. In a student database, Student can be an entity while admission number, name and date of birth can be attributes. Separating entities and attributes helps determine which fields belong together."
        },
        {
          "type": "paragraph",
          "title": "3.52 Tables should represent related information",
          "text": "A table should hold records of one logical kind. Repeating unrelated information in the same table can create duplication and make updates difficult. Dividing information into related tables can reduce unnecessary repetition and make relationships clearer. The design should still provide a reliable way to connect related records."
        },
        {
          "type": "paragraph",
          "title": "3.53 Primary keys identify records",
          "text": "A primary key is a field or combination of fields that uniquely identifies each record in a table. It should not contain duplicate values for different records. A suitable primary key makes it possible to distinguish one record from another and provides a stable reference for relationships with other tables."
        },
        {
          "type": "paragraph",
          "title": "3.54 Foreign keys connect tables",
          "text": "A foreign key is a field in one table that refers to a key in another table. It allows information stored in separate tables to be related. For example, a class identifier in a student table can refer to a corresponding class record in a class table. The exact field types and values must be compatible for a meaningful relationship."
        },
        {
          "type": "paragraph",
          "title": "3.55 Relationships reveal how records connect",
          "text": "A one-to-one relationship connects one record in one table to one record in another. A one-to-many relationship allows one record on one side to relate to many records on the other side, such as one class having many students. A many-to-many relationship requires an intermediate table so that each side can have multiple related records."
        },
        {
          "type": "paragraph",
          "title": "3.56 Referential integrity protects relationships",
          "text": "Referential integrity helps keep related tables consistent. A foreign-key value should refer to an existing related record when the relationship requires it. Rules governing insertion, update and deletion prevent the database from being filled with references to records that do not exist."
        },
        {
          "type": "paragraph",
          "title": "3.57 Starting a database in Base",
          "text": "LibreOffice Base provides the environment for creating and managing a database. A typical workflow begins by creating or opening a database file, defining tables and fields, choosing suitable data types, setting keys, entering records and then creating relationships, queries, forms and reports as required."
        },
        {
          "type": "paragraph",
          "title": "3.58 Field properties influence data quality",
          "text": "A field should be given a meaningful name and an appropriate data type. Text, numbers, dates and other kinds of values should not be mixed without reason. Field properties such as required values or default values can help maintain consistency. Good field design prevents many errors before data entry begins."
        },
        {
          "type": "paragraph",
          "title": "3.59 Data entry and editing",
          "text": "Records are entered as complete sets of field values. When editing, users should change only the intended fields and verify that the record still satisfies the table rules. Sorting can help arrange records for inspection, while filtering can temporarily display only records that match a condition without deleting the others."
        },
        {
          "type": "paragraph",
          "title": "3.60 Queries answer questions from stored data",
          "text": "A query is a request for selected information from one or more tables. Instead of displaying every record, a query can select particular fields and apply criteria. For example, a query can return students belonging to one class or marks above a chosen value. The query therefore turns a stored database into a tool for retrieving useful information."
        },
        {
          "type": "paragraph",
          "title": "3.61 Criteria and logical conditions",
          "text": "Query criteria specify which records should be included. Comparison operators can test equality, inequality and ranges. Logical operators can combine conditions. A clear criterion should match the meaning of the question being asked; otherwise the query may return technically correct but educationally irrelevant records."
        },
        {
          "type": "paragraph",
          "title": "3.62 SQL as a language for database queries",
          "text": "SQL provides a standard way to express many database operations. A SELECT statement can retrieve specified columns from a table and can include filtering, sorting and relationships. INSERT adds records, UPDATE changes existing values, and DELETE removes records when the user has permission and intends the operation. Care is essential with UPDATE and DELETE because they can affect multiple records."
        },
        {
          "type": "paragraph",
          "title": "3.63 Forms provide a user-facing entry method",
          "text": "A form is designed to make data entry and viewing easier than working directly with a table. A form can contain labels, input controls and navigation facilities. It can be based on a table or on an appropriate query depending on the task. A well-designed form reduces confusion by presenting only the fields the user needs."
        },
        {
          "type": "paragraph",
          "title": "3.64 Reports turn data into readable output",
          "text": "A report presents database information in a structured format suitable for reading, printing or sharing. Reports can be based on tables or queries and can organise information with headings, grouping and other layout features. A report is therefore different from a form: a form is primarily for interaction with data, while a report is primarily for presenting data."
        },
        {
          "type": "paragraph",
          "title": "3.65 Table, query, form and report work together",
          "text": "These database components have different roles but form one workflow. Tables store structured data. Queries retrieve or transform the required subset. Forms provide a convenient interface for entering or viewing data. Reports present selected information in a readable output format. Understanding the roles prevents the common mistake of trying to make one object perform every database task."
        },
        {
          "type": "paragraph",
          "title": "3.66 A complete school database example",
          "text": "Imagine a school database with Class, Student and Subject tables. Class stores class identifiers and class names. Student stores student identifiers and names together with a class reference. Subject stores subject identifiers and names. A marks table can connect students and subjects and store the marks. Queries can identify high scores, forms can collect entries, and reports can summarise results by class or subject."
        },
        {
          "type": "paragraph",
          "title": "3.67 Database design before data entry",
          "text": "If relationships and keys are decided before entering hundreds of records, errors become easier to prevent. If the structure is designed after data entry, duplicated values and inconsistent spellings may make relationships difficult to establish. Database design is therefore part of data management, not an optional step after the database has been filled."
        }
      ]
    },
    {
      "title": "Further Textbook-Aligned Consolidation and Practical Mastery",
      "blocks": [
        {
          "type": "paragraph",
          "title": "3.68 Data integrity and meaningful values",
          "text": "A database is useful only when the stored values represent the real situation accurately. Data types, field properties, keys and relationships all contribute to data integrity. A date should be treated as a date, a numeric mark as a number and a unique identifier as a key. Good database design prevents many errors before a query is ever executed."
        },
        {
          "type": "paragraph",
          "title": "3.69 Avoiding unnecessary duplication",
          "text": "If the same fact is entered in many records, correcting it later may require many updates. Separating stable information into its own table and referring to it through a key can reduce this repetition. The aim is not simply to create many tables; the aim is to organise information so that each important fact has a clear and maintainable place."
        },
        {
          "type": "paragraph",
          "title": "3.70 Query design follows the question",
          "text": "Start a query by stating the information question in ordinary language. Then identify the tables containing the required fields, select the output fields, define the criteria and decide whether sorting is needed. This prevents the common mistake of selecting fields first without knowing what the query is supposed to answer."
        },
        {
          "type": "paragraph",
          "title": "3.71 Multiple conditions need careful logic",
          "text": "A query using more than one condition must distinguish between requirements that must all be true and alternatives where either condition can be true. Logical operators express these relationships. Writing the intended condition in plain language before entering it into the query design makes the final result easier to verify."
        },
        {
          "type": "paragraph",
          "title": "3.72 SQL SELECT as a reasoning pattern",
          "text": "A SELECT query can be understood as a sequence: choose the fields to display, identify the source table or tables, filter records when necessary, and sort the resulting rows if required. Understanding this pattern makes SQL easier to read because each clause has a clear purpose rather than appearing as a collection of unfamiliar keywords."
        },
        {
          "type": "paragraph",
          "title": "3.73 Safe use of UPDATE and DELETE",
          "text": "UPDATE and DELETE can affect many records when their conditions are broad or missing. Before running either command, identify the exact records that should change and test the condition through a SELECT query when possible. This habit reduces accidental modification or removal of unrelated records."
        },
        {
          "type": "paragraph",
          "title": "3.74 Form design for real users",
          "text": "A form should present fields in a sensible order and use labels that a user can understand. Unnecessary controls can make entry confusing. If a form is intended for repeated data entry, consistent layout and navigation can reduce mistakes. The form should make the underlying database easier to use without hiding important rules from the user."
        },
        {
          "type": "paragraph",
          "title": "3.75 Report design for readers",
          "text": "A report should answer a reporting need rather than reproduce an entire table without structure. Useful headings, grouping and readable field arrangement help the reader understand the result. If a report is based on a query, the query should already select the relevant information so that the report does not become overloaded with unnecessary fields."
        },
        {
          "type": "paragraph",
          "title": "3.76 Exact answer: query",
          "text": "What is a query? A query is a request used to retrieve selected information from one or more database tables according to specified fields and conditions."
        },
        {
          "type": "paragraph",
          "title": "3.77 Final database workflow",
          "text": "A complete workflow is: identify requirements; identify entities and attributes; create tables; choose suitable data types; establish primary keys; create relationships and foreign keys; enter and validate records; build queries; design forms for convenient interaction; and prepare reports for presentation. Each stage depends on the quality of the earlier design decisions."
        }
      ]
    }
  ],
  "keyTerms": [
    "Database",
    "DBMS",
    "Table",
    "Record",
    "Field",
    "Primary Key",
    "Candidate Key",
    "Alternate Key",
    "Foreign Key",
    "Referential Integrity",
    "Relationship",
    "Query",
    "SQL",
    "Form",
    "Report"
  ],
  "importantPoints": [
    "Choose meaningful fields and suitable data types.",
    "Use primary keys for unique identification.",
    "Use foreign keys to connect related tables.",
    "Understand one-to-one, one-to-many and many-to-many relationships.",
    "Use queries to retrieve required records.",
    "Use forms for interaction and reports for presentation."
  ]
};
