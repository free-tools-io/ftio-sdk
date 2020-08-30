ftio-sdk
========

SDK to build free tools for the public on the internet. Your tools will be published to https://free-tools.io

More detailed technical information on tool development is covered at https://github.com/free-tools-io/free-tools-io

The same SDK can also be used to launch any https://free-tools.io tool in your local machine. The steps can be found in README.md of individual tools.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ftio-sdk.svg)](https://npmjs.org/package/ftio-sdk)
[![Downloads/week](https://img.shields.io/npm/dw/ftio-sdk.svg)](https://npmjs.org/package/ftio-sdk)
[![License](https://img.shields.io/npm/l/ftio-sdk.svg)](https://github.com/free-tools-io/ftio-sdk/blob/master/package.json)

<!-- toc -->
* [Steps](#steps)
* [Create New Tool](#create-new-tool)
* [Run Local Setup](#run-local-setup)
<!-- tocstop -->

# Steps
* Fork Github project https://github.com/free-tools-io/free-tools-io to your account
* Create new folder for your tool (Folder name to be clear and denotes the tool)
* Inside the folder create your tool with this SDK
* After testing, Raise pull-request to https://github.com/free-tools-io/free-tools-io at master branch
* After review and validation, it would be deployed to production at https://free-tools.io

# Create new tool

```sh-session
$ npm install -g ftio-sdk
$ ftio create
```

# Run Local Setup

Run below command start your local setup to test the tool.

```
$ ftio start
```

After successfully started, launch tool at http://localhost:3000


# Contribute

After completing the testing, commit to your forked repo and raise pull-request to https://github.com/free-tools-io/free-tools-io (`master` branch).

That's all. You are done. Wait for our response.

For any queries, ask at https://github.com/free-tools-io/free-tools-io/issues/new

Thank You !!!
