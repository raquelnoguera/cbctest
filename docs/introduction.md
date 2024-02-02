---
lang: en-GB
title: TS Intro
description: General introduction to the CBC Test Specification.
---

# Introduction

Cell broadcast was orinally conceived as a commercial service in GSM and UMTS
but, for various reasons, it failed to meet business expectations.
As a consecuence, most mobile operators did not deploy it, and a few did very
limited roll-outs.

The situation started to change in the first decade of the 2000's, when some 
countries like Japan, The Netherlands and the USA, started using cell broadcast 
for public warning and required to all the mobile operators in their territory 
to deploy CBCs. CBS rapidly became core for PWS in all standards bodies, 
including ATIS (for WEA), ETSI (for EU-Alert), Korea (for KPAS) and Japan (for 
ETWS). Cellular PWS solutions are now in place in many regions (e.g. article
110 of the EECC mandates that all EU member states must have cellular PWS 
working nationally by end of June 2022), which is forcing many MNOs for deploy 
CBCs inside their network.

This document attempts to describe a comprehensive list of **functional** test 
cases for acceptance testing of CBCs towards NEs in the southbound interface, 
as shown in the following figure.

<div style="text-align: center;">

![Scope](/assets/img/TS_Scope.svg)

</div>

Test cases:

* Are organised per technology.
* Include a description, list of pre-requisites, execution procedure and 
  expected outcome.
  For most test cases, the description includes a high level flow of messages.
  Only what is relevant for each message is described (e.g. IEs that relate to 
  the test).

***Note** My intention was to include sample traces for each test case. But I
have not been able to get these traces so far.*

The scope of all the test cases is the CBC. I.e. TC's only cover interactions
of the CBC with direct peer NEs (RNCs, MMEs, AMFs). It does not cover further 
interactions of these peers with radio nodes (NBs, eNBs, gNBs) except for the 
cases in which failure response from radio nodes are due to incorrect behaviour
of the CBC.

The CBE is out of the scope. In this TS, it is just a tool used to trigger  
test cases, but it is not the focus of this work. Besides, the CBE - CBC interface
is not really standardised in most regions, but is often proprietary to each 
CBC vendor. This interface is usually based on 
[CAPv1.2](https://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.html) from 
[Oasis](https://www.oasis-open.org/).

# Cell broadcast message

PWS alerts can only contain text messages. CBS messages are sent in *pages* of 
up to 82 octets and a message can contain up to 15 pages. This gives a maximum 
message length of 1230 octets.

Depending on the text encoding used, GSM7 or UCS2, each page can contain up to 
93 or 41 characters respectively. For additional information about text 
encoding, check [here](/identifiers.md#data-coding-scheme).

Authorities should always try to send concise alert messages, since the more 
pages the message has, the longest it takes for a handset to receive it and the 
most likely it is to fail to receive it completely. Most handsets do not show 
partial messages, but wait to receive it completely before alerting the user.

# Cell broadcast specifications

[3GPP TS23.041](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=748) 
is the main specification for Cell Broadcast Service and it is the basis for 
this test specification. It is, however, a stage 2 document, even though it
defines protocol details as well. The stage 3 (protocol) specifications for the 
different technologies are:

* **LTE:** [3GPP TS29.168](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1612)
* **5G:** [3GPP TS29.518](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=3339)
  and [3GPP TS38.413](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=3223)

Protocol specifications (stage 3) take precedence over stage 2 ones. If there 
is a conflict between descriptions in stage 2 and stage 3, then the stage 3 
description shall be the one considered.

# Note on 3GPP Relases

3GPP Rel16 is the basis for this work. I will jump into Rel17 if I see important CRs
affecting the outcome.

Interworking with other NEs (MMEs, AMFs) using older versions might
cause some test cases to fail and require customisation. It is up to the test
engineers to identify and get these issues resolved with the CBC and the peer 
entity vendors.

# CBE - CBC interface

CAPv1.2 is the base for this interface in most current national CBS roll-outs 
for PWS. However, standalone CAPv1.2 does not include all the support needed 
for CBS, for this reason some countries and organisations specify **profiles** 
to CAPv1.2. Such profiles:

- Specifie how CAP shall be used for alerting. E.g. which elements are 
  mandatory or how to use existing elements to send CBS specific information
  (e.g. for the CBC to derive the alert level).
- Extend CAP with new elements to convey CBS specific information (e.g. the 
  periodicity of alert broadcast over the radio channel).

A couple of examples of national profiles that have explicit hooks for CBS are:

* [IPAWS Profile](https://docs.oasis-open.org/emergency/cap/v1.2/ipaws-profile/v1.0/cap-v1.2-ipaws-profile-v1.0.pdf)
  by the USA Federal Emergency Management Agency (FEMA).
* CAP-FR by the French Government (public version not available at the time of 
  this writting). This profiles supports CBS and LB-SMS.

In USA, ATIS 0700008 is the standard protocol for the CBE - CBC interface, and 
it uses CAPv1.1 as its base. 

The CBE - CBC interface is **NOT** in the scope of this TS. This TS uses 
vanilla CAPv1.2 for requests sent from CBE to CBC and assumes that this CAP has
been extended somehow, e.g. via a national CAP profile, to include 
functionality that is missing in plain CAPv1.2. For example, it assumes that 
CAPv1.2 has been extended to:

* Convey Alert level, when the level is not defined by the values of CAP 
  parameters *Severity*, *Urgency* and *Certainty* as specified in 3GPP TS23.041 
  and shown in this [table](http://localhost:8080/identifiers.html#message-identifiers).
* Provide all the information that the CBC needs to calculate the number of times
  that a message has to be broadcasted (*Number of broadcasts*) and the *repetition 
  period* between broadcasts.
* Provide means for the CBC to send asynchronous updates to the CBE (e.g. when 
  a MME or AMF sends a WRITE-REPLACE-WARNING INDICATION to the CBC with 
  information about broadcast failure in an eNB / gNB).

# Alternatives to Cell Broadcast

Besides cell broadcast, another popular solution for PWS is **Location Based 
SMS** (LB-SMS). This solution is used in several countries, being Australia the
one that has probably done the most serious deployment and used it most 
masively.

The key advantage of LB-SMS over CBS is ***pasive location***. This 
functionality delivers situational awareness to the civil protection 
authorities that manage emergency events. For example, it allows them to know
how many people is affected and how people is reacting to their 
notifications (e.g. a request for evacuation). With LB-SMS, the civil protection
personnel managing an emergency also gets information about how many people is 
actually receiving the alert messages.

Obviously, LB-SMS is not as fast as CBS for large area events and it is 
sensitive to congestion in the network, which can be a serious issue specially 
in catastrophic events like earthquakes. This is, however, not an issue in more
predictable major events such as bush fires, floods, tornados or even 
tsunamis.

Authorities shall consider complementing CBS with LB-SMS and passive location.
Several countries, like France and Croatia, have done it and they are surely 
more prepared to cover adecuately all types of emergencies.
