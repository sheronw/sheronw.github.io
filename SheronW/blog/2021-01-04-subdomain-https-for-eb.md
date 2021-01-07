---
title: Assign a Subdomain to Elastic Beanstalk and Enable HTTPS
tags: [折腾记录]
---

> To enable HTTPS (easily), make sure you created one Elastic Beanstalk environment with Load Balancer option.

## Create Hosted Zone

- find Route 53 in AWS console
- choose `hosted zones` on the left
- click `create hosted zone`
- write your `subdomain.example.com` as domain name, choose `public hosted zone` and then click `create hosted zone`

## Edit TTL (optional for testing)

- find the NS record in this hosted zone, select and click `edit`
- change TTL to some value like 900 (15 min), by default the value is 172800 (2 days)

<!--truncate-->

## Add Alias Resource Record

- click `create record` in this hosted zone
- just leave blank for `record name`
- enable `alias` and assign `route traffic to` as your elastic beanstalk application
- click `create`

## Add NS Records for the Subdomain

- go to your domain provider and find the place to add records, for example, in Google Domains, go to `DNS` and find `custom resource records` section
- copy and paste the NS record in the hosted zone that you created just now, for example, in Google Domains, name should be `subdomain` (some providers use `subdomain.example.com`), type should be `NS` and data should be the values from NS record in the hosted zone, there might be several lines of value and you could use the smaller `+` sign to add them in one record
- could also set TTL to 900

## Change TTL back (optional)

- if you lowered TTL for testing, don't forget to change them back to default value

## Request a Certificate

- go to Certificate Manager in aws
- click `request a certificate`, choose `request a public certificate`
- type your `subdomain.example.com` and then choose DNS validation
- choose to import the CNAME record into Route 53 automatically

## Load Balancer Configuration

- make sure you created an environment with load balancer
- go to your elastic beanstalk environment
- click `configuration` on the left side bar
- find `load balancer` and edit
- click `add listener`
- port is `443`, protocol is `HTTPS` and choose the previous created certificate as your ssl certificate
- click `add`
