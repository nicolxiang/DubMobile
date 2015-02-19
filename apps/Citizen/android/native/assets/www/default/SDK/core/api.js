
/* JavaScript content from SDK/core/api.js in folder common */
﻿/**

example: Accela.Api.getApi("record.getRecordFees");
return:{
getUrl:function
method:string
version:string
}
**/
"use strict"
Accela.module("Api", {
    _urls: {
        record: {
            create_record_activities: { url: "/records/{recordId}/activities", method: "POST", version: "v4", scope: 'create_record_activities' },
            get_record_activities: { url: "/records/{recordId}/activities", method: "GET", version: "v4", scope: 'get_record_activities' },
            update_record_activity: { url: "/records/{recordId}/activities/{id}", method: "PUT", version: "v4", scope: 'update_record_activity' },

            get_create_record_describe: { url: "/records/describe/create?type={type}", method: "GET", version: "v4", scope: 'get_create_record_describe' },

            //Create/Update Record/Partial Record;
            create_partial_record: { url: "/records/initialize", method: "POST", version: "v4", scope: 'create_partial_record' },
            update_record: { url: "/records/{recordId}", method: "PUT", version: "v4", scope: 'update_record' },

            create_record: { url: "/records", method: "POST", version: "v4", scope: 'create_record' },
            finalize_record: { url: "/records/{recordId}/finalize", method: "POST", version: "v4", scope: 'finalize_record' },

            get_record: { method: "GET", version: "v4", url: "/records/{recordId}", scope: 'get_record' },
            get_records: { method: "GET", version: "v4", url: "/records?offset={offset}&limit={limit}&recordClass={recordClass}", scope: 'get_records' },

            get_record_addresses: { method: "GET", version: "v4", url: "/records/{recordId}/addresses", scope: 'get_record_addresses' },
            create_record_addresses: { method: "POST", version: "v4", url: "/records/{recordId}/addresses", scope: 'create_record_addresses' },
            update_record_address: { method: "PUT", version: "v4", url: "/records/{recordId}/addresses/{id}", scope: 'update_record_address' },
            delete_record_addresses: { method: "DELETE", version: "v4", url: "/records/{recordId}/addresses/{ids}", scope: 'delete_record_addresses' },

            get_record_parcels: { method: "GET", version: "v4", url: "/records/{recordId}/parcels", scope: 'get_record_parcels' },
            create_record_parcels: { method: "POST", version: "v4", url: "/records/{recordId}/parcels", scope: 'create_record_parcels' },
            update_record_parcel: { method: "PUT", version: "v4", url: "/records/{recordId}/parcels/{id}", scope: 'update_record_parcel' },
            delete_record_parcels: { method: "DELETE", version: "v4", url: "/records/{recordId}/parcels/{ids}", scope: 'delete_record_parcels' },

            get_record_owners: { method: "GET", version: "v4", url: "/records/{recordId}/owners", scope: 'get_record_owners' },
            create_record_owners: { method: "POST", version: "v4", url: "/records/{recordId}/owners", scope: 'create_record_owners' },
            update_record_owner: { method: "PUT", version: "v4", url: "/records/{recordId}/owners/{id}", scope: 'update_record_owner' },
            delete_record_owners: { method: "DELETE", version: "v4", url: "/records/{recordId}/owners/{ids}", scope: 'delete_record_owners' },

            create_record_condition_approvals: { method: "POST", version: "v4", url: "/records/{recordIds}/conditionApprovals", scope: 'create_record_condition_approvals' },
            delete_record_condition_approvals: { method: "DELETE", version: "v4", url: "/records/{recordIds}/conditionApprovals/{ids}", scope: 'delete_record_condition_approvals' },
            get_record_condition_approvals: { method: "GET", version: "v4", url: "/records/{recordId}/conditionApprovals", scope: 'get_record_condition_approvals' },
            get_record_condition_approval: { method: "GET", version: "v4", url: "/records/{recordIds}/conditionApprovals/{id}", scope: 'get_record_condition_approval' },
            update_record_condition_approval: { method: "PUT", version: "v4", url: "/records/{recordIds}/conditionApprovals/{id}", scope: 'update_record_condition_approval' },
            get_record_conditions: { method: "GET", version: "v4", url: "/records/{recordId}/conditions", scope: 'get_record_conditions' },
            get_record_condition: { method: "GET", version: "v4", url: "/records/{recordId}/conditions/{id}", scope: 'get_record_condition' },
            create_record_conditions: { method: "POST", version: "v4", url: "/records/{recordId}/conditions", scope: 'create_record_conditions' },
            update_record_condition: { method: "PUT", version: "v4", url: "/records/{recordId}/conditions/{id}", scope: 'update_record_condition' },
            delete_record_conditions: { method: "DELETE", version: "v4", url: "/records/{recordId}/conditions/{ids}", scope: 'delete_record_conditions' },

            // Fee and Payments
            get_record_fees: { url: "/records/{recordId}/fees?offset={offset}&limit={limit}", method: "GET", version: "v4", scope: 'get_record_fees' },
            get_record_fee_histories: { url: "/records/{recordId}/fees/histories?offset={offset}&limit={limit}", method: "GET", version: "v4", scope: 'get_record_fee_histories' },
            create_record_fees: { url: "/records/{recordId}/fees", method: "POST", version: "v4", scope: 'create_record_fees' },
            get_transaction: { method: "GET", version: "v4", url: "/transactions/{ids}", scope: 'get_transaction' },
            //create_payments: { method: "POST", version: "v4", url: "/payments?lang={lang}", scope: 'create_payments' },
            get_payments: { method: "GET", version: "v4", url: "/records/{recordId}/payments?lang={lang} ", scope: 'get_payments' },
            get_record_payment_histories: { method: "GET", version: "v4", url: "/records/{recordId}/payments/histories", scope: 'get_record_payment_histories' },
            get_payment: { method: "GET", version: "v4", url: "/records/{recordId}/payments/{paymentId}?lang={lang} ", scope: 'get_payment' },
            get_settings_record_type_feeschedules: { method: "GET", version: "v4", url: "/settings/records/types/{id}/fees/schedules", scope: 'get_settings_record_type_feeschedules' },
            get_settings_fee_items: { method: "GET", version: "v4", url: "/settings/fees?schedule={schedule}&version={version}&lang={lang}&fields={fields} ", scope: 'get_settings_fee_items' },
            create_invoice: { method: "POST", version: "v4", url: "/records/{recordId}/invoices?lang={lang}", scope: 'create_invoice' },
            //create_payment: { method: "POST", version: "v4", url: "/payments", scope: 'create_payment' },
            void_payment: { method: "PUT", version: "v4", url: "/payments/{paymentId}/void?lang={lang}", scope: 'void_paymentt' },
            refund_payment: { method: "PUT", version: "v4", url: "/payments/refund", scope: 'refund_payment' },

            get_record_related: { url: "/records/{recordId}/related", method: "GET", version: "v4", scope: 'get_record_related' },

            // permit document
            get_record_document_categories: { method: "GET", version: "v4", url: "/records/{recordId}/documentCategories", scope: 'get_record_document_categories' },
            get_record_documents: { method: "GET", version: "v4", url: "/records/{recordId}/documents", scope: 'get_record_documents' },
            create_record_documents: { method: "POST", version: "v4", url: "/records/{recordId}/documents", scope: 'create_record_documents' },
            delete_record_documents: { method: "DELETE", version: "v4", url: "/records/{recordId}/documents/{documentIds}", scope: 'delete_record_documents' },

            get_record_inspections: { method: "GET", version: "v4", url: "/records/{recordId}/inspections", scope: 'get_record_inspections' },
            get_record_inspection_types: { method: "GET", version: "v4", url: "/records/{recordId}/inspectionTypes", scope: 'get_record_inspection_types' },
            get_record_contacts: { method: "GET", version: "v4", url: "/records/{recordId}/contacts", scope: 'get_record_contacts' },
            get_record_additional: { method: "GET", version: "v4", url: "/records/{recordId}/additional", scope: 'get_record_additional' },
            get_record_professionals: { method: "GET", version: "v4", url: "/records/{recordId}/professionals", scope: 'get_record_professionals' },
            update_record_additional: { method: "PUT", version: "v4", url: "/records/{recordId}/additional", scope: 'update_record_additional' },
            //permit comment
            update_record_comment: { method: "PUT", version: "v4", url: "/records/{recordId}/comments/{id}", scope: 'update_record_comment' },
            create_record_comments: { method: "POST", version: "v4", url: "/records/{recordId}/comments", scope: 'create_record_comments' },
            get_record_comments: { method: "GET", version: "v4", url: "/records/{recordId}/comments", scope: 'get_record_comments' },
            delete_record_comments: { method: "DELETE", version: "v4", url: "/records/{recordId}/comments/{ids}", scope: 'delete_record_comments' },

            get_settings_construction_types: { method: "GET", version: "v4", url: "/settings/records/constructionTypes", scope: 'get_settings_construction_types' },

            //professionals
            create_record_professionals: { method: "POST", version: "v4", url: "/records/{recordId}/professionals", scope: 'create_record_professionals' },
            update_record_professional: { method: "PUT", version: "v4", url: "/records/{recordId}/professionals/{id}", scope: 'update_record_professional' },
            delete_record_professionals: { method: "DELETE", version: "v4", url: "/records/{recordId}/professionals/{ids}", scope: 'delete_record_professionals' },

            //contacts
            create_record_contact: { method: "POST", version: "v4", url: "/records/{recordId}/contacts", scope: 'create_record_contacts' },
            update_record_contact: { method: "PUT", version: "v4", url: "/records/{recordId}/contacts/{id}", scope: 'update_record_contact' },
            delete_record_contacts: { method: "DELETE", version: "v4", url: "/records/{recordId}/contacts/{ids}", scope: 'delete_record_contacts' },
            get_record_contact_addresses: { method: "GET", version: "v4", url: "/records/{recordId}/contacts/{contactId}/addresses", scope: 'get_record_contact_addresses' },
            create_record_contact_addresses: { method: "POST", version: "v4", url: "/records/{recordId}/contacts/{contactId}/addresses", scope: 'create_record_contact_addresses' },
            update_record_contact_address: { method: "PUT", version: "v4", url: "/records/{recordId}/contacts/{contactId}/addresses/{id}", scope: 'update_record_contact_address' },
            delete_record_contact_addresses: { method: "DELETE", version: "v4", url: "/records/{recordId}/contacts/{contactId}/addresses/{ids}", scope: 'delete_record_contact_addresses' },

            //asi/t
            get_settings_record_type_customform: { method: "GET", version: "v4", url: "/settings/records/types/{id}/customForms?offset={offset}&limit={limit}", scope: 'get_settings_record_type_customform' },
            get_settings_record_type_customtable: { method: "GET", version: "v4", url: "/settings/records/types/{id}/customTables?offset={offset}&limit={limit}", scope: 'get_settings_record_type_customtable' },
            get_record_customforms: { method: "GET", version: "v4", url: "/records/{recordId}/customForms?offset={offset}&limit={limit}", scope: 'get_record_customforms' },
            get_record_customtables: { method: "GET", version: "v4", url: "/records/{recordId}/customTables?offset={offset}&limit={limit}", scope: 'get_record_customtables' },
            update_record_customforms: { method: "PUT", version: "v4", url: "/records/{recordId}/customForms", scope: 'update_record_customforms' },
            update_record_customtables: { method: "PUT", version: "v4", url: "/records/{recordId}/customTables", scope: 'update_record_customtables' },


            get_record_statuses: { method: "GET", version: "v4", url: "/settings/records/types/{id}/statuses", scope: 'get_record_statuses' },

            get_record_types: { method: "GET", version: "v4", url: "/settings/records/types?lang={lang}&module={module}&offset={offset}&limit={limit}&fields={fields}", scope: 'get_settings_record_types' },
            get_all_record_types: { method: "GET", version: "v4", url: "/settings/records/types?lang={lang}", scope: 'get_all_record_types' },
            get_record_workflow_tasks: { method: "GET", version: "v4", url: "/records/{recordId}/workflowTasks?lang={lang}&fields={fields}", scope: 'get_record_workflow_tasks' },
            get_record_workflow_task: { method: "GET", version: "v4", url: "/records/{recordId}/workflowTasks/{id}?lang={lang}&fields={fields}", scope: 'get_record_workflow_task' },
            update_record_workflow_task: { method: "PUT", version: "v4", url: "/records/{recordId}/workflowTasks/{id}?lang={lang}&fields={fields}", scope: 'update_record_workflow_task' },
            get_record_workflow_task_statuses: { method: "GET", version: "v4", url: "/records/{recordId}/workflowTasks/{id}/statuses?lang={lang}", scope: 'get_record_workflow_task_statuses' },
            get_record_workflow_task_histories: { method: "GET", version: "v4", url: "/records/{recordId}/workflowTasks/histories?lang={lang}", scope: 'get_record_workflow_task_histories' },
            get_record_workflow_task_comment_histories: { method: "GET", version: "v4", url: "/records/{recordId}/workflowTasks/comments/histories?lang={lang}", scope: 'get_record_workflow_task_comment_histories' },



        },
        addresses: {
            get_settings_address_states: { method: "GET", version: "v4", url: "/settings/addresses/states", scope: 'get_settings_address_states' },
            get_settings_address_countries: { method: "GET", version: "v4", url: "/settings/addresses/countries", scope: 'get_settings_address_countries' },
            get_settings_address_street_suffixes: { method: "GET", version: "v4", url: "/settings/addresses/streetSuffixes", scope: 'get_settings_address_street_suffixes' },
            get_settings_address_street_directions: { method: "GET", version: "v4", url: "/settings/addresses/streetDirections", scope: 'get_settings_address_street_directions' },
            get_settings_address_street_fractions: { method: "GET", version: "v4", url: "/settings/addresses/streetFractions", scope: 'get_settings_address_street_fractions' },
            get_settings_address_unit_types: { method: "GET", version: "v4", url: "/settings/addresses/unitTypes", scope: 'get_settings_address_unit_types' },
            get_addresses: { method: "GET", version: "v4", url: "/addresses", scope: 'get_addresses' },
            get_address: { method: "GET", version: "v4", url: "/addresses/{id}", scope: 'get_address' },
            get_settings_street_prefixes: { method: "GET", version: "v4", url: "/settings/addresses/streetPrefixes", scope: 'get_settings_street_prefixes' },
            get_address_parcels: { method: "GET", version: "v4", url: "/addresses/{id}/parcels", scope: 'get_address_parcels' }
        },
        parcels: {
            get_parcel_addresses: { method: "GET", version: "v4", url: "/parcels/{id}/addresses", scope: 'get_parcel_addresses' },
            get_parcel_owners: { method: "GET", version: "v4", url: "/parcels/{id}/owners", scope: 'get_parcel_owners' },
            get_parcels: { method: "GET", version: "v4", url: "/parcels", scope: 'get_parcels' },
            get_parcel: { method: "GET", version: "v4", url: "/parcels/{id}", scope: 'get_parcel' }
        },
        payments: {
            create_payments: { method: "POST", version: "v4", url: "/payments?lang={lang}", scope: 'create_payments' },
        },
        owners: {
            get_owners: { method: "GET", version: "v4", url: "/owners", scope: 'get_owners' },
            get_owner: { method: "GET", version: "v4", url: "/owners/{id}", scope: 'get_owner' }
        },
        conditions: {
            get_settings_condition_types: { method: "GET", version: "v4", url: "/settings/conditions/types", scope: 'get_settings_condition_types' },
            get_settings_condition_statuses: { method: "GET", version: "v4", url: "/settings/conditions/statuses", scope: 'get_settings_condition_statuses' },
            get_settings_condition_approval_statuses: { method: "GET", version: "v4", url: "/settings/conditionApprovals/statuses", scope: 'get_settings_condition_approval_statuses' },
            get_settings_condition_priorities: { method: "GET", version: "v4", url: "/settings/conditions/priorities", scope: 'get_settings_condition_priorities' },
            get_condition_approvals_standard: { method: "GET", version: "v4", url: "/conditionApprovals/standard", scope: 'get_condition_approvals_standard' },
            get_conditions_standard: { method: "GET", version: "v4", url: "/conditions/standard?type={type}&group={group}&name={name}&limit=1000", scope: 'get_conditions_standard' },//&severity={severity}&publicDisplayMessage={publicDisplayMessage}&inheritable={inheritable}&priority={priority}&shortComments={shortComments}&longComments={longComments}&resolutionAction={resolutionAction}&includeNameInNotice={includeNameInNotice}&includeShortCommentsInNotice={includeShortCommentsInNotice}&displayNoticeInAgency={displayNoticeInAgency}&displayNoticeInCitizens={displayNoticeInCitizens}&displayNoticeInCitizensFee={displayNoticeInCitizensFee}&offset={offset}&limit={limit}&sort={sort}&direction={direction}&fields={fields}" },
            get_settings_condition_approval_types: { method: "GET", version: "v4", url: "/settings/conditions/approval/types", scope: 'get_settings_condition_approval_types' },
            get_settings_condition_approval_priorities: { method: "GET", version: "v4", url: "/settings/conditions/approval/priorities", scope: 'get_settings_condition_approval_priorities' },
        },
        cashier: {
            get_settings_fee_schedule_items: { url: "/settings/fees/schedules/{scheduleId}/items", method: "GET", version: "v4", scope: 'get_settings_fee_schedule_items' },
            create_cashier_payments: { url: "/cashier/payments?lang={lang}", method: "POST", version: "v4", scope: 'create_cashier_payments' }
        },
        inspection: {
            // inspection summary
            get_inspections_byid: { method: "GET", version: "v4", url: "/inspections/{id}", scope: 'get_inspections_byid' },
            get_settings_inspection_types: { method: "GET", version: "v4", url: "/settings/inspections/types?offset={offset}&limit={limit}&group={group}", scope: 'get_settings_inspection_types' },
            //get_settings_inspection_types: { method: "GET", version: "v4", url: "/settings/inspections/types" },
            get_settings_inspection_type: { method: "GET", version: "v4", url: "/settings/inspections/types/{ids}", scope: 'get_settings_inspection_type' },
            get_settings_inspection_statuses: { method: "GET", version: "v4", url: "/settings/inspections/statuses?group={group}", scope: 'get_settings_inspection_statuses' },
            //get_settings_inspection_statuses: { method: "GET", version: "v4", url: "/settings/inspections/statuses", scope: 'get_settings_inspection_statuses'  },
            get_inspectors: { method: "GET", version: "v4", url: "/inspectors", scope: 'get_inspectors' },
            assign_inspection: { method: "PUT", version: "v4", url: "/inspections/{id}/assign?inspectorId={inspectorId}", scope: 'assign_inspection' },
            reschedule_inspection: { method: "PUT", version: "v4", url: "/inspections/{id}/reschedule", scope: 'reschedule_inspection' },
            cancel_inspection: { method: "DELETE", version: "v4", url: "/inspections/{id}/cancel", scope: 'cancel_inspection' },
            get_record_highestSev_condition: { method: "GET", version: "v3", url: "/inspectorapp/record/{recordId}/conditions?filter=highestSev", scope: 'get_record_highestSev_condition' },
            get_settings_inspections_groups: { url: "/settings/inspections/types?offset={offset}&limit={limit}&groupCode={groupCode}", method: "GET", scope: 'get_settings_inspections_groups' },

            // inspection document
            get_inspections_documents: { method: "GET", version: "v4", url: "/inspections/{inspectionid}/documents", scope: 'get_inspections_documents' },
            delete_inspections_documents: { method: "DELETE", version: "v4", url: "/inspections/{inspectionid}/documents/{documentid}", scope: 'delete_inspections_documents' },

            //update_inspection_condition: { url: "/inspections/{inspectionid}/conditions/{conditionids}", method: "PUT", version: "v4", scope: 'update_inspection_condition'  },

            //inspection comment
            get_inspection_comments: { method: "GET", version: "v4", url: "/inspections/{inspectionids}/comments", scope: 'get_inspection_comments' },

            schedule_inspection: { method: "POST", version: "v4", url: "/inspections/schedule?lang={lang}", scope: 'schedule_inspection' },

            result_inspection: { method: "PUT", version: "v4", url: "/v4/inspections/{id}/result?lang={lang}", scope: 'result_inspection' },

            get_inspection_condition_approvals: { method: "GET", version: "v4", url: "/inspections/{inspectionIds}/conditionApprovals", scope: 'get_inspection_condition_approvals' },
            get_inspection_condition_approval: { method: "GET", version: "v4", url: "/inspections/{inspectionIds}/conditionApprovals/{id}", scope: 'get_inspection_condition_approval' },
            create_inspection_condition_approvals: { method: "POST", version: "v4", url: "/inspections/{inspectionIds}/conditionApprovals", scope: 'create_inspection_condition_approvals' },
            update_inspection_condition_approval: { method: "PUT", version: "v4", url: "/inspections/{inspectionIds}/conditionApprovals/{id}", scope: 'update_inspection_condition_approval' },
            delete_inspection_condition_approvals: { method: "DELETE", version: "v4", url: "/inspections/{inspectionIds}/conditionApprovals/{ids}", scope: 'delete_inspection_condition_approvals' },
            get_inspection_conditions: { method: "GET", version: "v4", url: "/inspections/{inspectionIds}/conditions", scope: 'get_inspection_conditions' },
            get_inspection_condition: { method: "GET", version: "v4", url: "/inspections/{inspectionIds}/conditions/{id}", scope: 'get_inspection_condition' },
            create_inspection_conditions: { method: "POST", version: "v4", url: "/inspections/{inspectionIds}/conditions", scope: 'create_inspection_conditions' },
            update_inspection_condition: { method: "PUT", version: "v4", url: "/inspections/{inspectionIds}/conditions/{id}", scope: 'update_inspection_condition' },
            delete_inspection_conditions: { method: "DELETE", version: "v4", url: "/inspections/{inspectionIds}/conditions/{ids}", scope: 'delete_inspection_conditions' },
            get_inspection_condition_histories: { method: "GET", version: "v4", url: "/inspections/{inspectionIds}/conditions/{id}/histories", scope: 'get_inspection_condition_histories' },


            get_inspection_checklists: { method: "GET", version: "v4", url: "/inspections/{inspectionId}/checklists", scope: 'get_inspection_checklists' },
            create_inspection_checklists: { method: "POST", version: "v4", url: "/inspections/{inspectionId}/checklists", scope: 'create_inspection_checklists' },
            get_inspection_checklist_items: { method: "GET", version: "v4", url: "/inspections/{inspectionId}/checklists/{checklistId}/checklistItems", scope: 'get_inspection_checklist_items' },
            delete_inspection_checklists: { method: "DELETE", version: "v4", url: "/inspections/{inspectionId}/checklists/{ids}", scope: 'delete_inspection_checklists' },
            get_inspection_checklist_histories: { method: "GET", version: "v4", url: "/inspections/{inspectionId}/checklists/{checklistId}/histories", scope: 'get_inspection_checklist_histories' },
            get_inspection_checklist_item_histories: { method: "GET", version: "v4", url: "/inspections/{inspectionId}/checklists/{checklistId}/checklistItems/{checkListItemId}/histories", scope: 'get_inspection_checklist_item_histories' },
            update_inspection_checklist_items: { method: "PUT", version: "v4", url: "/inspections/{inspectionId}/checklists/{checklistId}/checklistItems", scope: 'update_inspection_checklist_items' },
            get_inspection_checklist_item_documents: { method: "GET", version: "v4", url: "/inspections/{inspectionId}/checklists/{checklistId}/checklistItems/{checkListItemId}/documents", scope: 'get_inspection_checklist_item_documents' },
            create_inspection_checklist_item_document: { method: "POST", version: "v4", url: "/inspections/{inspectionId}/checklists/{checklistId}/checklistItems/{checkListItemId}/documents", scope: 'create_inspection_checklist_item_document' },

            get_settings_inspection_checklists: { method: "GET", version: "v4", url: "/settings/inspections/checklists", scope: 'get_settings_inspection_checklists' },
            get_settings_inspection_checklist: { method: "GET", version: "v4", url: "/settings/inspections/checklists/{ids}", scope: 'get_settings_inspection_checklist' },
            get_settings_checklist_item_customtable: { method: "GET", version: "v4", url: "/settings/inspections/checklists/{checklistId}/checklistItems/{checklistItemid}/customTables", scope: 'get_settings_checklist_item_customtable' },
            get_settings_checklist_item_customform: { method: "GET", version: "v4", url: "/settings/inspections/checklists/{checklistId}/checklistItems/{checklistItemid}/customForms", scope: 'get_settings_checklist_item_customform' },
            get_settings_checklist_groups: { method: "GET", version: "v4", url: "/settings/inspections/checklistsGroups", scope: 'get_settings_checklist_groups' },

            get_inspection_related: { method: "GET", version: "v4", url: "/inspections/{inspectionId}/related", scope: 'get_inspection_related' },
        },
        userProfiles: {
            get_my_profile: { url: "/users/me", method: "GET", version: "v4", scope: 'get_my_profile' }
        },
        document: {
            get_settings_document_types: { url: "/settings/documents/categories", method: "GET", version: "v4", scope: 'get_settings_document_types' },
            get_document: { method: "GET", version: "v4", url: "/documents/{documentIds}", scope: 'get_document' },
            download_document: { method: "GET", version: "v4", url: "/documents/{documentId}/download", scope: 'download_document' },
            get_document_thumbnail: { method: "GET", version: "v4", url: "/documents/{documentId}/thumbnail?height={height}&width={width}", scope: 'get_document_thumbnail' },
            get_documents_folder_groups: { method: "GET", version: "v4", url: "/settings/documents/folderGroups?isActive={isActive}", scope: 'get_documents_folder_groups' },
            update_documents_folder_groups: { method: "PUT", version: "v4", url: "/settings/documents/folderGroups", scope: 'update_documents_folder_groups' },
            get_documents_folders: { method: "GET", version: "v4", url: "/settings/documents/folders/{groupId}?isActive={isActive}", scope: 'get_documents_folders' },
            create_documents_folders: { method: "POST", version: "v4", url: "/settings/documents/folder", scope: 'create_documents_folders' },
            update_documents_folders: { method: "PUT", version: "v4", url: "/settings/documents/folder", scope: 'update_documents_folders' },
            delete_documents_folders: { method: "DELETE", version: "v4", url: "/settings/documents/folder/{ids}", scope: 'delete_documents_folders' },
            update_document: { method: "PUT", version: "v4", url: "/documents/{documentId}", scope: 'update_document' },
            update_multipte_document: { url: "/documents/{documentId}", method: "PUT" }
        },
        searches: {
            search_owners: { method: "POST", version: "v4", url: "/search/owners?offset={offset}&limit={limit} ", scope: 'search_owners' },
            search_parcels: { method: "POST", version: "v4", url: "/search/parcels?offset={offset}&limit={limit} ", scope: 'search_parcels' },
            search_addresses: { method: "POST", version: "v4", url: "/search/addresses?offset={offset}&limit={limit} ", scope: 'search_addresses' },

            search_records: { method: "POST", version: "v4", url: "/search/records?offset={offset}&limit={limit}&sort={sort}&direction={direction}", scope: 'search_records' },
            global_search: { method: "GET", version: "v4", url: "/search/global?lang=en&query={query}&type={type}&offset={offset}&limit={limit}", scope: 'global_search' },
            search_contacts: { method: "POST", version: "v4", url: "/search/contacts?offset={offset}&limit={limit}", scope: 'search_contacts' },
            search_inspections: { method: "POST", version: "v4", url: "/search/inspections?offset={offset}&limit={limit}", scope: 'search_inspections' },
            search_professionals: { method: "POST", version: "v4", url: "/search/professionals?offset={offset}&limit={limit}", scope: 'search_professionals' }
        },
        agency: {
            get_departments: { method: "GET", version: "v4", url: "/settings/departments", scope: 'get_departments' },
            get_departments_staffs: { method: "GET", version: "v4", url: "/settings/departments/{departmentid}/staffs", scope: 'get_departments_staffs' }
        },
        setting: {
            get_standard_comments: { method: "GET", version: "v4", url: "/settings/comments?groups={groups}&offset={offset}&limit={limit}", scope: 'get_settings_standard_comments' },
            get_standard_comment_groups: { method: "GET", version: "v4", url: "/settings/comments/groups?offset={offset}&limit={limit}", scope: 'get_settings_standard_comment_groups' },
            get_settings_record_expierationStatuses: { method: "GET", version: "v4", url: "/settings/records/expirationStatuses", scope: 'get_settings_record_expierationStatuses' },
            get_settings_departments: { version: "v4", url: "/settings/departments", method: "GET", scope: 'get_settings_departments' },
            get_settings_contact_types: { version: "v4", url: "/settings/contacts/types", method: "GET", scope: 'get_settings_contact_types' },
            get_settings_record_types: { version: "v4", url: "/settings/records/types?module={module}", method: "GET", scope: 'get_settings_record_types' },
            get_settings_record_statuses: { version: "v4", url: "/settings/records/types/{id}/statuses", method: "GET", scope: 'get_settings_record_statuses' },
            get_settings_department_staffs: { version: "v4", url: "/settings/departments/{id}/staffs", method: "GET", scope: 'get_settings_department_staffs' },
            get_settings_professional_types: { version: "v4", url: "/settings/professionals/types", method: "GET", scope: 'get_settings_professional_types' },
            get_settings_activity_types: { version: "v4", url: "/settings/activities/types", method: "GET", scope: 'get_settings_activity_types' },
            get_settings_activity_statuses: { version: "v4", url: "/settings/activities/statuses", method: "GET", scope: 'get_settings_activity_statuses' },
            get_settings_activity_priorities: { version: "v4", url: "/settings/activities/priorities", method: "GET", scope: 'get_settings_activity_priorities' }
        },
        contacts: {
            get_contact_types: { method: "GET", version: "v4", url: "/settings/contacts/types", scope: 'get_settings_contact_types' },
            get_contact_channels: { method: "GET", version: "v4", url: "/settings/contacts/preferredChannels", scope: 'get_settings_contact_preferredChannels' },
            get_contact_addresses: { method: "GET", version: "v4", url: "/contacts/{id}/addresses", scope: 'get_contact_addresses' }
        },
        professionals: {
            get_professionalTypes: { method: "GET", version: "v4", url: "/settings/professionals/types", scope: 'get_settings_professional_types' }
        },
        civiId: {
            get_civicid_profile: { method: "GET", version: "v4", url: "/civicid/profile", scope: 'get_civicid_profile' },
            get_linked_accounts: { method: "GET", version: "v4", url: "/civicid/accounts", scope: 'get_linked_accounts' },
            get_account_profile: { method: "GET", version: "v4", url: "/civicid/accounts/{id}", scope: 'get_account_profile' },
        },
        workflow: {
            get_my_workflow_tasks: { method: 'GET', version: 'v4', url: '/workflowTasks/mine?lang={lang}&offset={offset}&limit={limit}', scope: 'get_my_workflow_tasks' }
        },
    },
    getApiForBatch: function (key, params, body) {

        /***************update request module start*************/
        //var data = angular.toJson(body);
        //var api = Accela.Api;
        //var arraykey = key.split(".");
        //var scope = api._urls[arraykey[0]][arraykey[1]].scope;
        //if (true) {
        //    var _xmlhttp = Accela.XHRFactory.createXHRObject();
        //    _xmlhttp.open("POST", "/App/UpdateXmlModel", true);
        //    _xmlhttp.send("" + scope + "|" + data + "");
        //}
        /***************update request module End*************/

        var paths = key.split('.')
          , current = Accela.Api._urls;
        for (var i = 0; i < paths.length; ++i) {
            if (current[paths[i]] == undefined) {
                return undefined;
            } else {
                current = current[paths[i]];
            }
        }
        var finded = current;
        if (!finded) {
            throw new Error("API Key is not existed.");
        }
        var apiService = finded;
        var host = Accela._constants['API_HOST'];
        this.originUrl = Accela._constants['API_URL_FORMAT'] + apiService.url;
        this.method = apiService.method;
        this.version = apiService.version;
        var _url = "/" + this.version + apiService.url;
        //if (!params)
        //    params = {};
        //if (params["version"] == null) {
        //    params["version"] = this.version;
        //}
        //if (params["host"] == null) {
        //    params["host"] = host;
        //}
        for (var i in params) {
            _url = _url.replace("{" + i + "}", params[i]);
        }
        _url = _url.replace("\{\w*\}", "");
        var returnObj = { method: this.method, url: _url };
        if (body && (this.method == "POST" || this.method == "PUT")) {
            body = body ? (typeof (body) == "string" ? body : JSON.stringify(body)) : "";
            returnObj.body = escape(body);
        }
        return returnObj;
    },
    getApi: function (key) {
        var paths = key.split('.')
          , current = Accela.Api._urls;
        for (var i = 0; i < paths.length; ++i) {
            if (current[paths[i]] == undefined) {
                return undefined;
            } else {
                current = current[paths[i]];
            }
        }
        var finded = current;
        if (!finded) {
            throw new Error("API Key is not existed.");
        }
        var apiService = finded;
        var host = Accela._constants['API_HOST'];
        this.originUrl = Accela._constants['API_URL_FORMAT'] + apiService.url;
        this.method = apiService.method;
        this.scope = apiService.scope;
        this.version = apiService.version;
        this.getUrl = function (params) {
            var _url = this.originUrl;
            if (!params)
                params = {};
            if (params["version"] == null) {
                params["version"] = this.version;
            }
            if (params["host"] == null) {
                params["host"] = host;
            }
            var queryStrings = [];
            for (var i in params) {
                _url = _url.replace("{" + i + "}", params[i]);
            }
            _url = _url.replace(new RegExp("{([^}]*)}", "g"), "");
            return _url;
        }
    }
});