sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("me.conmy.trends.app.controller.notes", {

		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel();
			var oTable = this.getView().byId("notes-table");
			oTable.setModel(oModel);

			this.refreshModel();
		},

		dateFormatter: function (oVal) {
			console.log("Called formatter");
			var date = new Date(oVal);
            
            return date.getFullYear() + "-" 
              + ("0" + (date.getMonth() + 1)).slice(-2) + "-"
              + ("0" + date.getDate()).slice(-2);
		},

		refreshModel: function () {
			console.log("Refreshing the model");
			var oModel = this.getView().byId("notes-table").getModel();
			oModel.loadData("http://localhost:8080/notes");
		}

	});

});

