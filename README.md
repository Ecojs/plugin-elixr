# EMFramework Compat Plugin

A simple plugin which maps the ElixrFramework endpoints

## Setup

```ts
import { ECO } from 'eco.js';
import { ElixrPlugin } from '@eco.js/plugin-elixr';

// See Eco.js library for Eco configuration
const server = new ECO()

//! This Method loads Elixr into Eco.js. Currently no extra functionality requiring this
const elixr = server.createECOJSPlugin(ElixrPlugin);
//2 ways to use
elixr.apiCheck().then(()=>{
  // Success!
}).catch(()=>{
  // Failed!
})
server.EcoJSPlugins['ElixrPlugin'].apiCheck()...

//! Standalone
const elixr = new ElixrPlugin(server);

elixr.getRecipes().then(recipes => {
  recipes.get('Composite Fir Lumber').SkillsNeeded[0].Skill
})


```
