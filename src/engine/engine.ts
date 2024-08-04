import { UUID } from "crypto";
import WorkflowDefinitionRepository from "./repositories/WorkflowDefinitionRepository";

export default class WorkflowEngine {
  constructor(
    private workflowDefinitionRepository: WorkflowDefinitionRepository,
  ) {}

  public async executeWorkflow(workflowId: UUID): Promise<{ workflowExecutionId: UUID }> {
    return {
      workflowExecutionId: workflowId
    };
  }
}
