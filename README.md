# Intro

This CBC test specification is currently hosted [here](https://cbctest.yaluba.com/).

I have used [Vuepress](https://vuepress.vuejs.org/) to create this documentation.

To create the test spec just:

1. clone this repo
2. Make sure that you have a compatible version of NodeJS. I have used v16.14.0.
3. Install all the packages listed in package.json by running (you can use *yarn* instead of *npm* as well):

    ```
    npm install
    ```
    in the same folder where package.json is located.

Once this is done, you can run the documentation locally by entering:

```
npm run docs:dev
```

or you can build the site with:

```
npm run docs:build
```

and install it in a WEB server that is accessible to everyone.

# Test cases

The code for all TCs is inside the **docs** directory and it is structured hierachically:

- At the root is a set of markdown files with explanations about CBS, abbreviations, list of TCs, etc. Every time you add a TC, you'll need to add it to the list **manually**.
- The first level of the hierarchy is *per technology*, With one directory for for LTE and one for 5G.
- The second level of the hierarchy if *per functionality*, with all the TCs of the same functionality grouped together. The *functionality* corresponds to the tabs in the excel sheet *TCs.xlsx*.
- The third level of the hierarchy is the actual list of TCs. Each TC has its own *flow* diagram.

# Vuepress specifics

*.vuepress* is an important directory for vuepress projects. I won't explain here all the details (just read Vuepress documentation), but just mention that:

1. All assets used (e.g. figures), need to be put inside *.vuepress/public/assets*. You can see that I have copied there all the svg's created with plantuml using a similar directory structure as for the TCs. The paths to these assets in side the TCs all point here.
    
    For example, if you open *index.md* of *testcases/lte/start/tc1", you will see this in line 55:

    ```
    ![tc_lte_start_1](/assets/img/flows/lte/start/tc_lte_start_1.svg)
    ```

2. *config.js* is the main configuration file. Here, I have defined the structure of the nav and side bars, and some other. 
You'll need to play with this file if you want to change the look&feel, or if you want to do cool things like releasing this Test Spec as a PWA :-)

# Drawings
I used [plantuml](https://plantuml.com/) to create the information flows in the flows directory, and the desktop version of [drawio](https://www.drawio.com/) for other graphics.

# ToDo

I only had time to write some of the LTE TCs that are listed in the excel sheet. Many of these TCs have been developed in Newman + Postman , but not all. 

It was the intention to add to this TestSpec the pcap trace obtained during the execution of each TC agaisnt the Valid8 simulator, but I have not done it. I think that adding this may help a tester trying to execute the TC against a real MME.
