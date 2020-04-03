  // User data object
  this.data = data;
  // Credit tag positioning
  this.position = { ...data.position };
  // Credit tag accounts
  this.accounts = { ...data.accounts };
  // Icon colour
  this.iconColour = data.colour;
  // Root attachment
  this.root = document.createElement('div');
  this.root.setAttribute('class', this.data.el);
