[
  //for changing vim mode in origin Vintage
    //for changing to normal mode in vintageous
    { "keys": ["shift+tab"], "command": "expand_abbreviation_by_tab",
      "context": [
        {
          "operand": "source.js", 
          "operator": "equal", 
          "match_all": true, 
          "key": "selector"

        },
        {   
          "key": "selection_empty", 
          "operator": "equal", 
          "operand": true,
          "match_all": true 
        }
        
      ]
    },
    { "keys": ["ctrl+r"], "command": "reindent", "args": {"single_line": false} },

//for changing tab like vim  style
{ "keys": [",", "g", "p"], "command": "prev_view_in_stack" },
{ "keys": [",", "g", "t"], "command": "next_view_in_stack" },
{ "keys": [",", "k", "b"], "command": "toggle_side_bar" },
//for vintage mode toggle
{"keys": ["ctrl+shift+v"], "command": "toggle_setting", "args": {"setting": "vintage_lines.force_mode"}},
{ "keys": ["ctrl+alt+y"], "command": "terminal_view_open" },


//for toggling line number
{"keys": ["ctrl+shift+g"], "command": "toggle_setting", "args": {"setting": "gutter"} },
{"keys": ["ctrl+shift+l"], "command": "toggle_setting", "args": {"setting": "line_numbers"} },
//origami key binding
{ "keys": [",", "v", "s", "p"], "command": "carry_file_to_pane", "args": {"direction": "right"} },
{ "keys": [",", "s", "p"], "command": "carry_file_to_pane", "args": {"direction": "down"} },
{ "keys": [",", "b", "d"], "command": "destroy_pane", "args": {"direction": "self"} },
{ "keys": [",", "w", "|"], "command": "zoom_pane", "args": {"fraction": 0.9} },
{ "keys": [",", "w", "="], "command": "unzoom_pane", "args": {} },
//for origami copied from main keymap
{ "keys": [",", "h"], "command": "focus_neighboring_group", "args": {"forward": false} },
{ "keys": [",", "l"], "command": "focus_neighboring_group" },
//for column selection i am reversing sublime key bindings with scroll_lines
{ "keys": ["ctrl+shift+up"], "command": "scroll_lines", "args": {"amount": 1.0} },
{ "keys": ["ctrl+shift+down"], "command": "scroll_lines", "args": {"amount": -1.0} },
{ "keys": ["ctrl+alt+u"], "command": "select_lines", "args": {"forward": false} },
{ "keys": ["ctrl+alt+n"], "command": "select_lines", "args": {"forward": true} },
{ "keys": ["f10"], "command": "find_use" },
{ "keys": ["f12"], "command": "goto_definition_scope" },
{
  "no_outside_adj": null,
  "keys": ["ctrl+alt+super+s"],
  "command": "bh_key",
  "args":
  {
    "lines" : true,
    "plugin":
    {
      "type": ["__all__"],
      "command": "bh_modules.bracketselect"
    }
  }
},
  { "keys": ["ctrl+k", "ctrl+t"], "command": "title_case" }

]