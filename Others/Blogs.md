# Blogs and Tips and Tricks

[Connecting from SAP Business Application Studio to SAP ABAP Environment in BTP](https://blogs.sap.com/2021/07/23/connecting-from-sap-business-application-studio-to-sap-abap-environment-in-btp/)

[Set Up Local Development Using VS Code](https://developers.sap.com/tutorials/btp-app-set-up-local-development.html)

If cf --version does not work after install of Cloud Foundry, then you need to make a symbolick link manually:

Open a CMD in administrator mode and execute following command:

```shell
mklink "c:\Program Files\Cloud Foundry\cf.exe" "c:\Program Files\Cloud Foundry\cf8.exe"
```

Login to cf</br>
Start a terminal and execute the following:
> cf login -a \<API-URL> </br>
> and enter your email, password and select your organisation and space.

```shell
cf login -a https://api.cf.us10.hana.ondemand.com
```

If Fiori Template wizard niet wil starten:</br>
Uninstall the existing generator with the command: `npm uninstall -g @sap/generator-fiori`.</br>
Then try and install the generator again by executing: `npm i -g @sap/generator-fiori`.

[SAP Help, Develop Applications With RAP](https://help.sap.com/docs/BTP/923180ddb98240829d935862025004d6/4cff5dff7f2642cab54e993c840a163e.html)

## [Space in your SAP Business Application Studio is low](https://ga.support.sap.com/dtp/viewer/index.html#/tree/2827/actions/41344:41348:41361).

* You can delete the **node_modules** folders out of you projects.
* Then clean the *Trash* folder, the *yarn cache* and *npm cache* folder, using the next commands in a terminal

```shell
rm -rf /home/user/.local/share/Trashfiles
rm -rf /home/user/.cache
rm -rf /home/user/.npm
```

[Add Images to Fiori Elements Opject PAge](https://blogs.sap.com/2020/09/30/showing-an-avatar-with-initials-or-image-on-the-fiori-element-object-page-for-a-better-user-experience/)
