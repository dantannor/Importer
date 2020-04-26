# Importer

Imported data

The data flow from the hospital is done via daily extracts from the hospital’s EMR system. The daily extract consists of 2 files:
Patient - a file that contains general & demographic information about the patients
Treatment - a file that contains all the treatments associated with the patients from the previous file.

Each hospital will provide both files - but with a different format.

In this exercise you will build the architecture and implementation of a “Files-import” system that receives a batch of two files (Patient + Treatment) and imports the data to a local DB.

Please pay attention to the following issues:

Every hospital will have files with different formats. (And sometimes with different data).
The files size is ~100K rows.
