---
layout: post
title: Amazon Fake Review Data Breach
date: 2021-05-10
description: 
cover_url: dt1.png
published: true
permalink: /:year/:month/:day/amazon-fake-review-data-breach
author: Saoud Khalifah # Add name author (optional)
---

The recent [data leak report](https://www.safetydetectives.com/blog/amazon-reviews-leak-report/) exposing millions of records incriminating professional reviewers and sellers engaging in fake review fraud did not surprise us at all at Fakespot. 

We've seen Facebook groups, WhatsApp groups, WeChat and many other social platforms hosting the meeting grounds for unscrupulous sellers/agencies/brands to get in touch with folks that would write reviews for their products, obviously in exchange for compensation. 

We first detected the first signs of these types of promotional reviews in the tail end of 2015 and they exploded in volume by 2016 and 2017. The incentivized reviews had disclaimers that mentioned the review authors received products for free/compensation in exchange for writing the review. The amount of these types of compensated reviews reached epidemic levels and Amazon had to react. Amazon officially banned any reviews with text mentioning that kind of disclaimer in the late months of 2016 by doing specific keyword scanning within submitted reviews. The ripple effect of this ban is clearly seen today with social media platforms ending up hosting the subterfuge of Amazon sellers to obtain fake reviews.


{% figure caption:"An example of a compensated review from 2017 for a book" %}
![An example of a compensated review from 2017 for a book](/assets/img/compensated_review.png){:style="border: 1px solid black; max-width: 700px;"}
{% endfigure %}


One of the companies in the data leak was a relatively well known brand that is a competitor to Anker, RAVPower and other brands in the electronic accessories space, a hotbed of fake reviews. 

This particular brand named Aukey was implicated in the data leak and had hundreds of listings taken down by Amazon. As of today, there were 292 listings on Amazon down 77% from 1,236 listings that Fakespot has analyzed with over close to half a million reviews [(https://www.fakespot.com/company/aukey)](https://www.fakespot.com/company/aukey).

{% figure caption:"AUKEY Fakespot Company Page Screenshot" %}
![AUKEY Fakespot Company Page Screenshot](/assets/img/auk.png){:style="border: 1px solid black; max-width: 700px;"}
{% endfigure %}

As you can see from the average Fakespot grade and adjusted rating for the company's products, the results aren't flattering. We can say that it wasn't a shock to see this brand (and others) be included in the data dump.

A subset  of Fakespot's models have been trained specifically to pick up on signals that reviews and reviewers can be sourced via these promotional review campaigns. We believe these types of reviews are the more insidious fake reviews as they are mostly written by humans that have an intrinsic bias embedded. Fakespot's engines look for a targeted amount of historic and present parameters to determine if the reviews belong to such a category and are pointed out to our users via our Fakespot grade or our reports with the deception level metric.

**Will this data leak change anything for the current trend of fake reviews on Amazon?** I don't think so. A lot of the banned sellers will be reinstated and probably a good amount of the reviews will be part of the Amazon "purges" (read my [previous post](https://saoudkhalifah.com/2020/10/19/lets-talk-about-fake-reviews-part-1) to understand these events) but it is a slap on the wrist and the fake review economy continues full steam ahead. 

This is what happens when you have millions of 3rd party sellers running amok on the Amazon platform and so much profit to be gained by duping unsuspecting consumers with these types of reviews.

**Try Fakespot today and spend less time reading and wondering if the reviews are real or not, download our [Chrome extension](https://chrome.google.com/webstore/detail/fakespot-analyze-fake-ama/nakplnnackehceedgkgkokbgbmfghain) or visit us at [fakespot.com](https://www.fakespot.com).**
