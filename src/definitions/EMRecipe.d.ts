type EMSkill = { Skill: string; Level: `${number}` };
type EMIngredient = {
  Type: 'ITEM' | 'TAG';
  DisplayName: string;
  Quantity: `${number}`;
  isStatic: `${boolean}`;
};
type EMRecipe = {
  Name: string;
  CraftStation: string[];
  SkillsNeeded: EMSkill[];
  ModulesNeeded: unknown[];
  BaseCraftTime: `${number}`;
  BaseLaborCost: `${number}`;
  BaseXPGain: `${number}`;
  Ingredients: EMIngredient[];
  Products: Omit<EMIngredient, 'isStatic' | 'Type'>[];
};
