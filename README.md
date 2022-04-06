# Workshop_NATO<a name="TOP"></a>

Workshop for NATO ABAP/Fiori Elements

## Blogs

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