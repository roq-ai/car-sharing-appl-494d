interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Car Owner', 'Customer Service Representative', 'End Customer'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read user information',
    'Update own user information',
    'Create a new company',
  ],
  ownerAbilities: ['Manage users', 'Manage companies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/1bf60dff-e427-4ae3-ba03-26fb92c4348e',
};
