JAVASCRIPT CLASSES

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

Defining classes

Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.

Class body
The body of a class is the part that is in curly braces {}. This is where you define class members, such as methods or constructor.

The body of a class is executed in strict mode even without the "use strict" directive.

A class element can be characterized by three aspects:

Kind: Getter, setter, method, or field
Location: Static or instance
Visibility: Public or private
Together, they add up to 16 possible combinations. To divide the reference more logically and avoid overlapping content, the different elements are introduced in detail in different pages:

Method definitions
Public instance method

getter
Public instance getter

setter
Public instance setter

Public class fields
Public instance field

static
Public static method, getter, setter, and field

Private properties
Everything that's private

In addition, there are two special class element syntaxes: constructor and static initialization blocks, with their own references.

Constructor
The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class — a SyntaxError is thrown if the class contains more than one occurrence of a constructor method.

A constructor can use the super keyword to call the constructor of the super class.

You can create instance properties inside the constructor:

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

Alternatively, if your instance properties' values do not depend on the constructor's arguments, you can define them as class fields.

Static initialization blocks
Static initialization blocks allow flexible initialization of static properties, including the evaluation of statements during initialization, while granting access to the private scope.

Multiple static blocks can be declared, and these can be interleaved with the declaration of static fields and methods (all static items are evaluated in declaration order).

Methods
Methods are defined on the prototype of each class instance and are shared by all instances. Methods can be plain functions, async functions, generator functions, or async generator functions.

Evaluation order
When a class declaration or class expression is evaluated, its various components are evaluated in the following order:

The extends clause, if present, is first evaluated. It must evaluate to a valid constructor function or null, or a TypeError is thrown.
The constructor method is extracted, substituted with a default implementation if constructor is not present. However, because the constructor definition is only a method definition, this step is not observable.
The class elements' property keys are evaluated in the order of declaration. If the property key is computed, the computed expression is evaluated, with the this value set to the this value surrounding the class (not the class itself). None of the property values are evaluated yet.
Methods and accessors are installed in the order of declaration. Instance methods and accessors are installed on the prototype property of the current class, and static methods and accessors are installed on the class itself. Private instance methods and accessors are saved to be installed on the instance directly later. This step is not observable.
The class is now initialized with the prototype specified by extends and implementation specified by constructor. For all steps above, if an evaluated expression tries to access the name of the class, a ReferenceError is thrown because the class is not initialized yet.
The class elements' values are evaluated in the order of declaration:
For each instance field (public or private), its initializer expression is saved. The initializer is evaluated during instance creation, at the start of the constructor (for base classes) or immediately before the super() call returns (for derived classes).
For each static field (public or private), its initializer is evaluated with this set to the class itself, and the property is created on the class.
Static initialization blocks are evaluated with this set to the class itself.
The class is now fully initialized and can be used as a constructor function.
