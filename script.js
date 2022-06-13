Blockly.Blocks["lightswitch"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Turn")
      .appendField(
        new Blockly.FieldDropdown([
          ["red", "R"],
          ["yellow", "Y"],
          ["green", "G"],
          ["all", "all"],
        ]),
        "color"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["on", "on"],
          ["off", "off"],
        ]),
        "switch"
      );
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["lightswitch"] = function (block) {
  var dropdown_color = block.getFieldValue("color");
  var dropdown_switch = block.getFieldValue("switch");
    if (dropdown_switch==="on" && dropdown_color==="R"){
      var code = "document.getElementById('switch').style.backgroundColor='red';"
    }
    if (dropdown_switch==="on" && dropdown_color==="Y"){
      var code = "document.getElementById('switch').style.backgroundColor='yellow';"
    }
    if (dropdown_switch==="on" && dropdown_color==="G"){
      var code = "document.getElementById('switch').style.backgroundColor='green';"
    }
    if (dropdown_switch === "on" && dropdown_color === "all") {
        var code ="document.getElementById('switch').style.backgroundColor='grey';";
    }
    if (dropdown_switch==="off"){
      var code = "document.getElementById('switch').style.backgroundColor='white';"
  }
  return code;
};
