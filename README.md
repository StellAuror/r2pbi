# About
Using JS & R langauge to develop custom Power BI visualizations
## Prerequisites
- **Node JS** - which runs the pbiviz package
- **pbiviz** - package which allows to build Power BI visuals using JS;
  to install use **Windows Power Shell** & `npm i -g powerbi-visuals-tools@latest`
	  - run as administrator
	  - check if installed properly `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`
- **Power BI Desktop** - options, check the **develop a visual** 
- login with a business account and use a [dev service](https://app.powerbi.com/user/user-settings/developer-settings?experience=power-bi)
## Steps
- Create a **pbiviz** project in **Vistual Studio Code**
	- in **Power Shell** use `cd <folder>` to navigate to the desired directory (`..` to move back)
	- create a project by `pbiviz new <folder name> -t rhtml `
	- navigate to project by `cd <folder name>`
	- in the **script .r** file insert the R script below the **Actual Code** separator & make sure that:
		- **=** is used instead of **<-**
		- dataset name is a **Values**
		- there is a semicolon **;** at the end of the code
		- object name is the same as in **ggplotly** call
	- in **pbiviz.json** set
		- description
		- supportURL
		- name
		- email
	- execute **pbiviz package** in the terminal
