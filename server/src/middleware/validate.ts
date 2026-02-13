import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";

export function validateQuery(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.query);

    if (!result.success) {
      const errors = result.error.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      }));

      res.status(400).json({
        success: false,
        errors,
      });
      return;
    }

    // Express 5 makes req.query readonly, so store validated data on res.locals
    res.locals.validatedQuery = result.data;
    next();
  };
}
