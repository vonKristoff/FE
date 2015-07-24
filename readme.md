#FE libz

Helper library for all things Frontend.

---

### Methods

*	**toggle**
	
		var bool = FE.toggle(bool)

*	**toggleTruth**

		FE.toggleTruth(data, 'name')
	
*	**getUrlParams**

		var param = FE.getURLParams('id')
	
*	**type**

		if(FE.type(obj, 'string')) console.log('pass')
	
*	**urlify**

		var anchor = FE.urlify(text)

---
	
### String Prototype

*	**contains**

		if(str.contains('hello')) console.log('ooh, it does.');

*	**countWords**

		var num = str.countWords()

---

### Array Prototype

*	**order**

		ary.order(0, ary.length)
	
*	**shuffle**

		ary.shuffle()
	
*	**clone**

		var copy = ary.clone()