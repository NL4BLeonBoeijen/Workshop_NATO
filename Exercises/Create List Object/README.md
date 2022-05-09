# Create List Report Object Page

## Task 1: Duplicate CDS **ZWS##_CDS_LIST_SEARCH** to **ZWS##_CDS_LIST_OBJECT**

## Task 2: Add the new CDS to your *Service Definition*

```ABAP
@EndUserText.label: 'UI ## Service Definition'
define service ZUI_WKSP_## {
  expose ZWS##_CDS_Simple as SimpleCDS;
  expose ZWS##_CDS_Basic as BasicCDS;
  expose ZWS##_CDS_LIST as BasicList;
  expose ZWS##_CDS_LIST_SEARCH as BasicSearch;
  expose ZWS##_CDS_LIST_OBJECT as ListObject;
}
```

## Task 3: Create a new Fiori elements application with the new CDS

Create a new Fiori Application using the Template Wizard for a *List Report*
| Field | Value |
|-|-|
| Data source | Connect to a System |
| System | abap-cloud-default_xx-dev (BTP) |
| Service | ZUI_WKSP_## |
| Main entity | ListObject |
| Module name | basic-object |
| Application title | Basic Object |
| Application namespace | nato.workshop |
| Description | Basic Object |
| Project folder path | /home/user/projects |
| Add deployment configuration | Yes |
| Add FLP configuration | Yes |
| Deployment Target | Cloud Foundry |
| Destination name | abap-cloud-default_xx(SCP)  |
| Add application to managed application router | Yes |
| Semantic Object | NATO |
| Action | BasicObject |
| Title | Basic List Object |
| Subtitle | Workshop |

* Data Source and Service Selection</br>![Data Source](../../Images/055.png)
* Entity Selection</br>![Entity Selection](../../Images/069.png)
* Project Attributes</br>![Project Attributes](../../Images/070.png)
* Deployment Configuration</br>![Deployment Configuration](../../Images/071.png)
* Fiori Launchpad Configuration</br>![Fiori LaunchPad Configuration](../../Images/072.png)
* Preview Application</br>![Preview Application](../../Images/060.png)
* Select start-noflp, this is the fastest test.</br>![Select start-noflp](../../Images/061.png)
* Result</br>![Result](../../Images/073.png)
* Select a line</br>![Select a Line](../../Images/074.png)

## Task 4: 