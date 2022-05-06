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
