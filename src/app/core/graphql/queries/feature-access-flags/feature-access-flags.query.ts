import { gql } from "apollo-angular";
import { DocumentNode } from "graphql";

export const GetFeatureFlags:DocumentNode=gql`
query getFeatureFlags{
getFeatureFlags{
flag
value
description
}
}
`;