# Build & Deploy Application and Configure Fiori Cloud Launchpad

## Build and Deploy

* Right click on the **mta.yaml** file and select *Build MTA Project*

![BuildMTA](../../Images/024.png)</br>
This will start a terminal and it will create 3 new directories: *dist*, *mta_archives* and *resources*.

* Open the *mta_archives* folder and right click the **.mtar** file and select *Deploy MTA Archive*
* Check your Cloud Foundry Endpoint and press *Enter* to confirm.</br>![Cloud Foundry Endpoint](../../Images/026.png)
* Enter your e-mail address and password of your trial account.
* Select your Organisation and Space

This will open another terminal that will deploy the **.mtar** to the cloud. This can take a moment.

* To see if all went well you can goto your SAP BTP Trial Cockpit and the option **HTML5 Applications** on the left side.</br>![HTML5 Applications](../../Images/027.png)
* If you filter on *natoworkshop* you should see your application.</br>![Filter](../../Images/028.png)
* Click on the application and your application will start.</br>![Your Application](../../Images/029.png)

## Configure Fiori Launchpad Cloud

* Goto *Instances and Subscriptions* in your BTP Cockpit and goto the Launchpad Service ![Start Launchpad Service](../../Images/033.png)</br>
* In the Site Directory select the **provider manager**![Provider Manager](../../Images/034.png)</br>
* Refresh the HTML5 Apps![Refresh](../../Images/035.png)</br>
* Goto the **Content Manager** and click the tab *Content Explorer*![Content Explorer](../../Images/036.png)</br>
* Click the **HTML5 Apps**![HTML5 Apps](../../Images/037.png)</br>
* User filter **nato** to list your **Basic List** application and add it to My Content![Add to My content](../../Images/038.png)</br>
* Goto the tab *My Content*, here you see your **Basic List** application.</br>Now lets create a Role.![New Role](../../Images/039.png)</br>
* Enter the *Title*, *ID* and *Description*, then click on the search block under Assign Items:, you now see a your application. Press the <kbd>+</kbd> button behind your application, then *Save* and then *Back*![Role](../../Images/040.png)</br>
* We now have a new Role</br>Now lets create a Group.![New Group](../../Images/041.png)</br>
* Enter the *Title* and *Description*, then click on the search block under Assign Items:, you now see a your application. Press the <kbd>+</kbd> button behind your application, then *Save* and then *Back*![Group](../../Images/042.png)</br>
* We now have a new Group</br>Now lets create a Catalog![New Catalog](../../Images/043.png)</br>
* Enter the *Title* and *Description*, then click on the search block under Assign Items:, you now see a your application. Press the <kbd>+</kbd> button behind your application, then *Save* and then *Back*!![Catalog](../../Images/044.png)</br>
* We now have a new Catalog![My Content](../../Images/045.png)</br>
* Next we assign the created Role to our Site![Site Settings](../../Images/046.png)</br>
* We *Edit* the Site![Edit](../../Images/047.png)</br>
* Click on the search block under Assign Items:, you now see a your Role. Press the <kbd>+</kbd> button behind your role, then *Save* and then *Back*![Assign Role](../../Images/048.png)</br>
* Goto the Site/Launchpad![Goto Site](../../Images/049.png)</br>
* Our Launchpad is still empty.![Empty](../../Images/050.png)</br>This is because we have not yet assigned the new Role to our user.
* Goto your BTP Cockpit and select *Role Collections*, Filter on **workshop** and click on your Role![Role Collection](../../Images/051.png)</br>
* Goto *Edit* mode and enter your e-mail address of your trial account in the fields **ID** and **E-Mail** and press *Save*![Enter User](../../Images/052.png)</br>
* Now lets start our Launchpad again. ![Launchpad](../../Images/053.png)</br>

> Hint: it is sometimes needed to start a browser in *Private/Incognito mode* and lauch the Fiori Launchpad again, to make your changes available.

[Back to Exercises](../README.md)
