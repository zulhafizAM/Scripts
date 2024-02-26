public async getSchemeOfServices({ response }: HttpContextContract) {
        try {
            const result = await this.schemeOfServiceService.getSchemeOfServices();
            return response.status(200).send(success(result));
        } catch (e) {
            return response
                .status(409)
                .send(error('An error occured while processing your request'));
        }
    }
