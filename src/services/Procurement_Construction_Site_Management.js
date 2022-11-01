import service from "./httpServices";

const url = "http://localhost:8081";
const urlSupplier = "http://localhost:8081/supplier";

export async function getAllCustomerApprovedPurchaseRequisitions() {
  return await service.get(
    url + `/order/all-customer-approved-pr`
  );
}

export async function getAllCustomerAndSupplierAcceptedPurchaseRequisitions(supplierId) {
  return await service.get(
    urlSupplier + `/all-customer-supplier-accepted-pr/${supplierId}`
  );
}

export async function getAllCustomerApprovedPRs(supplierId) {
  return await service.get(
    urlSupplier + `/all-customer-accepted-pr/${supplierId}`
  );
}

export async function getAllCustomerApprovalPendingSoq(employeeUserId) {
  return await service.get(
    urlSupplier + `/all-customer-approval-pending-soq/${employeeUserId}`
  );
}

export async function acceptOrRejectCustomerApprovalPendingSoq(command) {
  return await service.put(
    urlSupplier + `/accept-or-reject-approval-pending-soq`, command
  );
}

export async function acceptCustomerApprovedPurchaseRequisition(supplierAcceptPrDto) {
  return await service.post(
    urlSupplier + `/accept-customer-approved-pr`, supplierAcceptPrDto
  );
}

export async function acceptCustomerAcceptedPurchaseRequisition(supplierOrderQuotationId) {
  return await service.put(
    urlSupplier + `/accept-customer-accepted-pr/${supplierOrderQuotationId}`
  );
}








