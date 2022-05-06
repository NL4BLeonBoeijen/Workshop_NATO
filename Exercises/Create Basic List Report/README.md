# Create Basic List Report
Copy your *ZWS##_CDS_SIMPLE* to **ZWS##_CDS_LIST**.</br>
Remember to change the @AbapCatalog.sqlViewName and @EndUserText.label values.</br>
```ABAP CDS
@AbapCatalog.sqlViewName: 'ZWK##CDSLIST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'List Report'
@UI.headerInfo.typeName: 'Sales Order'
@UI.headerInfo.typeNamePlural: 'Sales Orders'
define view ZWS98_CDS_LIST as select from ztmcds9_i_so {
@UI.lineItem: [{position: 10 }]
    key Id as SalesOrderID,
    CustomerId as CustomerID,
@UI.lineItem: [{position: 20 },{ label: 'Customer Name' }]    
    _Customer.name as CustomerName,
@UI.lineItem: [{position: 30 }]    
    GrossAmount
}
```
Activate the CDS and add it to the Service Binding as **BasicList**
```ABAP CDS
@EndUserText.label: 'UI 98 Service Definition'
define service ZUI_WKSP_98 {
  expose ZWS98_CDS_Simple as SimpleCDS;
  expose ZWS98_CDS_Basic as BasicCDS;
  expose ZWS98_CDS_LIST as BasicList;
}
```
Start your SAP Business Application Studio.</br>
Open/Create your Dev Space.
