/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchTestCards = /* GraphQL */ `
  query SearchTestCards(
    $filter: SearchableTestCardFilterInput
    $sort: [SearchableTestCardSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableTestCardAggregationInput]
  ) {
    searchTestCards(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getTestCard = /* GraphQL */ `
  query GetTestCard($id: ID!) {
    getTestCard(id: $id) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTestCards = /* GraphQL */ `
  query ListTestCards(
    $filter: ModelTestCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
