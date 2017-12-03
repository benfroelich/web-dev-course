var todo_list = ["add a todo"];
var state = "initialized";
var output = console.log;

function delete_entry(cmd)
{
	var item_to_delete = cmd.substring("delete ".length, cmd.length)
	var delete_index = todo_list.indexOf(item_to_delete);
	if(delete_index === -1) 
	{
		console.log("could not delete \"" + item_to_delete + "!\"");
	}
	else
	{
		todo_list.splice(delete_index, 1);
		output("successfully deleted: " + item_to_delete);
	}
}

function list()
{
	output("********************");
	todo_list.forEach(function (item, i){output(i + ": " + item);});
	output("********************");

}

prompt("Hellloooooo");
while(state != "quit")
{
	var new_cmd = prompt("enter a command: ");
	// check for quit
	if(new_cmd === null || new_cmd.toLowerCase() === "quit")
	{
		state = "quit";
		output[0] = "quitting";
	}
	// check for add command by looking for "add" at the beginning of the command string
	else if(new_cmd.toLowerCase().indexOf("add ") === 0)
	{
		todo_list.push(new_cmd.substring(4, new_cmd.length));
	}
	else if(new_cmd.toLowerCase().indexOf("delete ") === 0)
	{
		delete_entry(new_cmd);
	}
	else if(new_cmd.toLowerCase() === "list")
	{
		list()
	}
	else if(new_cmd.toLowerCase() === "hi")
	{
		output("suh duh");
	}
	else output("unrecognized cmd: " + new_cmd)
}