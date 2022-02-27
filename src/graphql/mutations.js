/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTestCard = /* GraphQL */ `
  mutation CreateTestCard(
    $input: CreateTestCardInput!
    $condition: ModelTestCardConditionInput
  ) {
    createTestCard(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTestCard = /* GraphQL */ `
  mutation UpdateTestCard(
    $input: UpdateTestCardInput!
    $condition: ModelTestCardConditionInput
  ) {
    updateTestCard(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTestCard = /* GraphQL */ `
  mutation DeleteTestCard(
    $input: DeleteTestCardInput!
    $condition: ModelTestCardConditionInput
  ) {
    deleteTestCard(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
