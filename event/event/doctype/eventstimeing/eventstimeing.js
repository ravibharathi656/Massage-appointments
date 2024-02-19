// Copyright (c) 2024, Ravi and contributors
// For license information, please see license.txt

frappe.ui.form.on('EventsTimeing', {
	validate: function(frm) {
		if(frm.doc.no_of_seats <= 9 ){
			frappe.throw("The minimum no of seats is 10")
		}
	}
});
 