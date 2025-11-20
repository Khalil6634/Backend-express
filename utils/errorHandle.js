class StatusCode extends Error {
  constructor(message, Statuscode, details) {
    super(message);
    this.StatusCode = Statuscode;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

const handlerPrisma = (error) => {
  if (error.code === "P2002") {
    const target = error.meta?.target || "data";
    return new CustomError(
      `Data dengan nilai yang duplikat (${target}) sudah ada.`,
      409
    );
  }

  if (error.code === "P2025") {
    return new CustomError("Data yang diminta tidak ditemukan.", 404);
  }

  return new CustomError('Terjadi kesalahan database internal.', 500);
};

export {StatusCode, handlerPrisma};
