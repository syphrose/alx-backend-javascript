JAVASCRIPT

Software Linter
Definition
A software linter also known as a “linter” is a tool used to identify and report potential issues (syntax errors, undeclared variables, etc.) in a program. It can even report convention or style inconsistencies. It does so by highlighting them so that the programmer is aware, so changes can be made. There are a wide variety of linters as well as lint rules for specific programming languages and even for software frameworks.

There are typically two ways to lint code:

Actively
Passively
Active
Active checking is typically achieved by running a monitor tool that is constantly checking the file that your working on in order to spot inconsistencies and possible errors (e.g., having a specific linter along with some lint rules installed as a plug-in in your Code Editor).

Passive
Passive checking is done by taking a piece of code, and manually running it through a tool to identify potential issues. For example, copying and pasting your code into a specific linter tool, or running the linter against a specific file using the command line. This tool can be installed locally or be available as a service (e.g., website on the Internet).

Statements and declarations
JavaScript applications consist of statements with an appropriate syntax. A single statement may span multiple lines. Multiple statements may occur on a single line if each statement is separated by a semicolon. This isn't a keyword, but a group of keywords.

Statements and declarations by category
For an alphabetical listing see the sidebar on the left.

Control flow
return
Specifies the value to be returned by a function.

break
Terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

continue
Terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

throw
Throws a user-defined exception.

if...else
Executes a statement if a specified condition is true. If the condition is false, another statement can be executed.

switch
Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

try...catch
Marks a block of statements to try, and specifies a response, should an exception be thrown.

Declaring variables
var
Declares a variable, optionally initializing it to a value.

let
Declares a block scope local variable, optionally initializing it to a value.

const
Declares a read-only named constant.

Functions and classes
function
Declares a function with the specified parameters.

function*
Generator Functions enable writing iterators more easily.

async function
Declares an async function with the specified parameters.

async function*
Asynchronous Generator Functions enable writing async iterators more easily.

class
Declares a class.

Iterations
do...while
Creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop.

for...in
Iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.

for...of
Iterates over iterable objects (including arrays, array-like objects, iterators and generators), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

for await...of
Iterates over async iterable objects, array-like objects, iterators and generators, invoking a custom iteration hook with statements to be executed for the value of each distinct property.

while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

Others
Empty
An empty statement is used to provide no statement, although the JavaScript syntax would expect one.

Block
A block statement is used to group zero or more statements. The block is delimited by a pair of curly braces.

Expression statement
An expression statement evaluates an expression and discards its result. It allows the expression to perform side effects, such as executing a function or updating a variable.

debugger
Invokes any available debugging functionality. If no debugging functionality is available, this statement has no effect.

export
Used to export functions to make them available for imports in external modules, and other scripts.

import
Used to import functions exported from an external module, another script.

label
Provides a statement with an identifier that you can refer to using a break or continue statement.

with Deprecated
Extends the scope chain for a statement.
