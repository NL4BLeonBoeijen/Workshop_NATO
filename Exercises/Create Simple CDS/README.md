# Create a simple CDS
Create a simple CDS with name *ZWS##_CDS_SIMPLE* where ## is your number.</br>
Add the fields: Id, CustomerId, _Customer.name and GrossAmount.</br>
>Template:
```ABAP CDS
@AbapCatalog.sqlViewName: 'ZWK##CDSSIMPLE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Simple CDS'
define view ZWS98_CDS_Simple as select from ztmcds9_i_so {
    key Id,
    CustomerId,
    _Customer.name,
    GrossAmount
}
```
Activate your CDS using CTRL-F3.</br>
Test your CDS by opening it with **Data Preview**. This should result in a list of records.
![Result List](../../Images/1.png)
<img src="../../Images/1.png" width="60%">