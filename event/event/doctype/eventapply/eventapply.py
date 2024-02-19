# Copyright (c) 2024, Ravi and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class EventApply(Document):
	def before_save(self):
		doc = frappe.get_doc('EventsTimeing',self.id)
		doc.seats_filled = doc.seats_filled + 1
		doc.save()