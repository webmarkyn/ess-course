# Military Time Validator (#militaryTimeValidator)

> Write a class (or a function) capable of validating whether a string time range is a valid military time range or not.

> Here are some string examples.

- "01:12 - 14:32" (yes)
- "25:00 - 12:23" (no)
- "22:00 - 23:12" (yes)

knowings:
    knows that input string is in valid time-range format
        "03:20-23:20" is invalid
        "3:04 - 5:3" is invalid
        "1:14 - 22:14" is valid
    knows whether time is valid
        valid when:
            1.hours is >= 0 or < 24
            2. minutes >= 0 or < 60
    "01:15 - 22:14" is valid
    "13:20 - 18:59" is valid
    "20:40 - 05:30" is valid
    "25:40 - 05:30" is invalid
    "03:61 - 24:30" is invalid

## Getting started

To set up the project, run the following command:

```bash
npm run install
```

## To run the tests in development mode

To run the tests and have them reload when you save, run the following command:

```bash
npm run test:dev
```