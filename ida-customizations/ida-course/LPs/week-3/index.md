---
parent:
  title: Introduction to IBC and CosmJS
  description: Learn how to connect chains and how to use CosmJS for the Cosmos SDK
  number: 4
order: 0
title: Week 3 - Learn How to Connect Chains and How to Use CosmJS for the Cosmos SDK
tags:
---

<div class="tm-overline tm-rf-1 tm-lh-title tm-medium tm-muted">Learn how to connect chains and how to use CosmJS for the Cosmos SDK</div>
<h1 class="mt-4 mb-6">Introduction to IBC and CosmJS</h1>

Ever wondered how cross-chain communication is possible? Get a fast introduction to the world of the **Inter-Blockchain Communication Protocol (IBC)**.

You will learn more about the transportation, authentication, and ordering layer of IBC and take a deeper dive into how token transfers between chains become possible. Finally, you will take a more detailed look at relaying with IBC.

You will also learn about CosmJS, the TypeScript library for the Cosmos SDK. With step-by-step examples, you will learn how to work with CosmJS when building your application-specific blockchain.

![LP image - Week 3](/planet-pod.svg)

## In this chapter

<HighlightBox type="learning">

In this chapter, you will:

* Learn about **IBC**:
  * Discover what IBC is.
  * Get an introduction to the different layers of IBC and how connections, channels, and clients relate to each other in IBC.
  * Take a look at IBC token transfers.
  * Explore interchain accounts.
  * Dive into relaying with IBC.
  * Get an overview of helpful tools for IBC.

* Learn about **CosmJS**:
  * Discover what CosmJS is.
  * Learn how to load CosmJS and Stargate into your projects.
  * Learn how to interact with a Cosmos blockchain using the existing methods of CosmJS.
  * Learn how to interface with the Keplr wallet in the browser.
  * Learn how to create new CosmJS methods so your users can query your specific module and blockchain.

</HighlightBox>

<HighlightBox type="info">

This chapter covers quite a lot of content that goes very deep into the intricacies of IBC. Please be aware that the recommended **essentials** for IBC are:

* [What is IBC?](/academy/3-ibc/1-what-is-ibc.md)
* [IBC Token Transfer](/academy/3-ibc/7-token-transfer.md)
* [IBC Tooling](/academy/3-ibc/12-ibc-tooling.md)

The sections on [IBC/TAO connections, channels, and clients](/academy/3-ibc/2-connections.md), [Interchain accounts](/academy/3-ibc/8-ica.md), and [IBC middleware](/academy/3-ibc/9-ibc-mw-intro.md) are optional and **NOT** final exam relevant. They are made available only in case you want to dive deeper.

</HighlightBox>

## Next up

First, begin with an [introduction to IBC](/academy/3-ibc/1-what-is-ibc.md), then you can go ahead an head to the section on [fungible token transfers](/academy/3-ibc/7-token-transfer.md). After getting an [overview on helpful tools for IBC](/academy/3-ibc/12-ibc-tooling.md), you can start your ComsJS journey with an [introduction section](/tutorials/7-cosmjs/1-cosmjs-intro.md).

## Developer Resources

<div v-for="resource in $themeConfig.resources">
  <Resource
    :title="resource.title"
    :description="resource.description"
    :links="resource.links"
    :image="resource.image"
    :large="true"
  />
  <br/>
</div>
