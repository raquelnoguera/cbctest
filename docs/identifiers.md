---
lang: en-GB
title: Identifiers used in the context of Cell Broadcast Service 
description: CBS Identifiers.
---

# Message identifiers

Section 9.4.1.2.2 of 3GPP [TS23.041](/standards.md) reserves the range of
message identifiers 4352 - 6399 (0x1100 - 0x18FF) for public warning. This 
table also defines the different combinations of CAP parameters *Severity*, 
*Urgency* and *Certainty* that map to specific EU-Alert and WEA alerts.

Table 1 of ETSI [TS102900](/standards.md) defines how to map alert levels 
between EU-Alert and WEA3.

The value of the message identifier to use for each alerts is selected based 
on: 
  
* Alert type.
* Language: local or additional.

The following table all this information to show how the CBC shall decide 
what message identifier to use for each alert.

<table>
    <tr style="background-color: #e2e2ff; color:#454560">
        <th rowspan=3 style="border: 2px solid #f2f2f2">EU-Alert</th>
        <th rowspan=3 style="border: 2px solid #f2f2f2">WEA3</th>
        <th colspan=3 rowspan=2 style="border: 2px solid #f2f2f2">CAP Parameters</th>
        <th colspan=2 style="border: 2px solid #f2f2f2">Message Id</th>
    </tr>
    <tr style="background-color: #e2e2ff; color:#454560">
        <th colspan=2 style="border: 2px solid #f2f2f2">Language</th>
    </tr>
    <tr style="background-color: #e2e2ff; color:#454560">
        <th style="border: 2px solid #f2f2f2">Severity</th>
        <th style="border: 2px solid #f2f2f2">Urgency</th>
        <th style="border: 2px solid #f2f2f2">Certainty</th>
        <th style="border: 2px solid #f2f2f2">Local</th>
        <th style="border: 2px solid #f2f2f2">Additional</th>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td style="border: 2px solid #f2f2f2">Level 1</td>
        <td style="border: 2px solid #f2f2f2">Presidential</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">4370</td>
        <td style="border: 2px solid #f2f2f2">4383</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td rowspan=2 style="border: 2px solid #f2f2f2">Level 2</td>
        <td rowspan=2 style="border: 2px solid #f2f2f2">Extreme Alert</td>
        <td rowspan=4 style="border: 2px solid #f2f2f2">Extreme</td>
        <td rowspan=2 style="border: 2px solid #f2f2f2">Immediate</td>
        <td style="border: 2px solid #f2f2f2">Observed</td>
        <td style="border: 2px solid #f2f2f2">4371</td>
        <td style="border: 2px solid #f2f2f2">4384</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td style="border: 2px solid #f2f2f2">Likely</td>
        <td style="border: 2px solid #f2f2f2">4372</td>
        <td style="border: 2px solid #f2f2f2">4385</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td rowspan=6 style="border: 2px solid #f2f2f2">Level 3</td>
        <td rowspan=6 style="border: 2px solid #f2f2f2">Severe Alert</td>
        <td rowspan=2 style="border: 2px solid #f2f2f2">Expected</td>
        <td style="border: 2px solid #f2f2f2">Observed</td>
        <td style="border: 2px solid #f2f2f2">4373</td>
        <td style="border: 2px solid #f2f2f2">4386</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td style="border: 2px solid #f2f2f2">Likely</td>
        <td style="border: 2px solid #f2f2f2">4374</td>
        <td style="border: 2px solid #f2f2f2">4387</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td rowspan=4 style="border: 2px solid #f2f2f2">Severe</td>
        <td rowspan=2 style="border: 2px solid #f2f2f2">Inmediate</td>
        <td style="border: 2px solid #f2f2f2">Observed</td>
        <td style="border: 2px solid #f2f2f2">4375</td>
        <td style="border: 2px solid #f2f2f2">4388</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td style="border: 2px solid #f2f2f2">Likely</td>
        <td style="border: 2px solid #f2f2f2">4376</td>
        <td style="border: 2px solid #f2f2f2">4389</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td rowspan=2 style="border: 2px solid #f2f2f2">Expected</td>
        <td style="border: 2px solid #f2f2f2">Observed</td>
        <td style="border: 2px solid #f2f2f2">4377</td>
        <td style="border: 2px solid #f2f2f2">4390</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td style="border: 2px solid #f2f2f2">Likely</td>
        <td style="border: 2px solid #f2f2f2">4378</td>
        <td style="border: 2px solid #f2f2f2">4391</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td style="border: 2px solid #f2f2f2">AMBER</td>
        <td style="border: 2px solid #f2f2f2">AMBER</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">4379</td>
        <td style="border: 2px solid #f2f2f2">4392</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">RMT</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">4380</td>
        <td style="border: 2px solid #f2f2f2">4393</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">Exercise</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">4381</td>
        <td style="border: 2px solid #f2f2f2">4394</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">Operator defined use</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">4382</td>
        <td style="border: 2px solid #f2f2f2">4395</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td style="border: 2px solid #f2f2f2">Level 4</td>
        <td style="border: 2px solid #f2f2f2">Public Safety Alert</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">4396</td>
        <td style="border: 2px solid #f2f2f2">4397</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">State/Local test</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">4398</td>
        <td style="border: 2px solid #f2f2f2">4399</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">Geofencing trigger</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">4400*</td>
        <td style="border: 2px solid #f2f2f2">-</td>
    </tr>
    <tr style="background-color: #e8e8e8; color:#303050">
        <td style="border: 2px solid #f2f2f2">Info</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">-</td>
        <td style="border: 2px solid #f2f2f2">6400</td>
        <td style="border: 2px solid #f2f2f2">-</td>
    </tr>
    <tr>
        <td colspan=7>* Geofencing trigger does not contain displayable text.</td>
    </tr>
</table>

The CAP profile for each country should specify how to derive alert types (i.e. 
message identifiers) from the value of specific parameters or groups of
parameters inside a CAP Alert. These profiles may reuse what is shown in 
the table for CAP parameters *Severity*, *Urgency* and *Certainty*, or define
a totally different way of deriving the alert level and, therefore, the 
message identifier. For example, they might use the *parameter* element inside
the *info* object to explicitly state the alert level.

# Serial Number

All CBS messages have a *serial number* that is used by various nodes (e.g. eNBs,
UEs) to know whether two requests received from different sources, at different 
times or in different locations (case of UE) actually refer to the same or a 
different message. 

The internal structure of this *serial number* is defined in section 9.4.1.2.1
of [3GPP TS23.041](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=748).
In short, the *serial number* is two octets long and has the following fields:

* **Geographic Scope (GS)** [2 bits]: used to define the geographical validity of 
  this message and how the UE shall display it. The following table is 
  extracted from the standard.

| GS value | Display Mode | Geographical scope |
| :------: | :----------: | ------------------ |
| 00       | Inmediate    | Cell wide |
| 01       | Normal       | PLMN/SNPN wide |
| 10       | Normal       | Tracking Area wide in E-UTRAN and NG-RAN |
| 11       | Normal       | Cell wide |

For PWS, the display mode should be ignored by UEs. All PWS messages for which 
the user of the handset has opted-in should be displayed inmediately.

::: tip Default Geographical Scope
While there is no default value defined for GS, it is presumed that most 
commercial CBCs allow configuring the default value that is used for all the
PWS messages.

In most countries, value *02* is configured, since PWS alerts have PLMN scope.
Another value can be configured in countries that require different scope for 
PWS alerts.
:::

* **Message code** [10 bits]: differentiates between CBS messages from the same 
  source and type (i.e. with the same Message Identifier).
* **Update number** [4 bits]: indicates a change of the message content of the 
  same CBS message, i.e. the CBS message with the same Message Identifier, 
  Geographical Scope, and Message Code. It differentiates between older and 
  newer versions of the same CBS message within the indicated geographical 
  area.

# Message reference

Section 9.2.1 of 3GPP TS23.041 defines the concept of *message reference*. This
is what CBS nodes (MME, eNB, UE, etc.) use to distinguish if a received CBS 
protocol message refers to a new broadcast message or an active one, and it is
defined as the combination of serveral fields / parameters as the tern <Message 
Identifier, Serial Number, Cell Identifier>.

::: warning A Note on Message References
A *message reference* has **cell granularity**.<br>
A WRITE-REPLACE-WARNING-REQUEST may translate into an *update* for active 
message references and the creation of new message references. It depends on 
the content of the *Cell List* or *Warning Area List* respectively. 
:::


# Data coding scheme

3GPP [TS23.038](/standards.md) defines the encoding of text messages for CBS. 
The data coding scheme (DCS) is a 1 octet value that contains information 
about:

- Type of data: plain / compressed text or binary.
- Text encoding: GSM7 or UCS2.
- Language.

TS23.038 also defines the GSM7 enconding tables for the different languages. It
encodes most English and Scandinavian characters with 7 bits, and defines an 
extension mechanism, using shift tables, to encode additional characters with 
14 bits.

GSM7 shift tables have been defined for many languages that use a reduced set 
of characters. 

UCS2 can be used for any language and must be used for languages with a large 
set of characters, like Chinese or Japanese. UCS2 is a flavour of Unicode, and 
encodes all characters with 16 bits.

# Area identifiers

Area concepts for the different technologies (LTE, 5G) are defined in 
different 3GPP standards, and their identifiers are defined in 3GPP 
[TS23.003](/standards.md). 

The CBC uses the following area concepts:

| Technologies | Identifier | Area concept | Comments |
| ---------- | ------------ | -------- | --------- |
| LTE | E-CGI | E-UTRAN Cell | |
| 5G | NR CGI | NR Cell | |
| LTE, 5G | TAI | Tracking Area | |
| LTE, 5G |  | Emergency Area | |

When needed, the TC procedure clearly states which identifiers are relevant for
the test.
