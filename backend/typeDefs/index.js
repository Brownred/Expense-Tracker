import { mergeTypeDefs } from "@graphql-tools/merge";

import transactionTypeDefs from "./transaction.typeDefs.js";
import userTypeDefs from "./user.typeDefs.js";

const TypeDefs = mergeTypeDefs([transactionTypeDefs, userTypeDefs]);

export default TypeDefs;